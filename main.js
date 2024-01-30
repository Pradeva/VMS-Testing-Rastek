const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const http = require('http');
const io = require('socket.io');
const handlebars = require('handlebars');
const childprocess = require('child_process');
const MP4Frag = require('./core/MP4Frag');
const fs = require('fs');
var cors = require('cors')
const os = require('os');
const path = require('path');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
const RateLimiter = require('express-rate-limit');

console.log(' - Checking config.');
if (!fs.existsSync(path.join(os.homedir(), 'kci.config.js'))) {
	fs.copyFileSync(
		path.join(__dirname, 'kci.config.example.js'),
		path.join(os.homedir(), 'kci.config.js')
	);
	console.log(
		' - New config created: ' + path.join(os.homedir(), 'kci.config.js')
	);
	console.log(' - Edit config to suite and restart!');
	process.exit(0);
}
const config = require(path.join(os.homedir(), 'kci.config.js'));
console.log(' - Config loaded: ' + path.join(os.homedir(), 'kci.config.js'));

console.log(' - Checking volumes and ffmpeg.');

if (!fs.existsSync(config.system.storageVolume)) {
	console.log(' - Storage volume does not exist');
	process.exit();
} else {
	try {
		if (
			!fs.existsSync(
				path.join(config.system.storageVolume, 'CAMERA_RECORDINGS')
			)
		) {
			fs.mkdirSync(
				path.join(config.system.storageVolume, 'CAMERA_RECORDINGS')
			);
		}
	} catch (e) {
		console.log('Error creating system directories.');
		console.log(e.message);
		process.exit(0);
	}
}

if (!fs.existsSync(config.system.ffmpegLocation)) {
	console.log(
		'ffmpeg not found in specifed location: ' + config.system.ffmpegLocation
	);
	process.exit(0);
}

const IOLimiter = RateLimiter({
	windowMs: 2000,
	max: 100
});

console.log(' - Creating express application.');
const App = new express();
App.use(IOLimiter);
App.use(cors())
App.use(express.json());
App.use(cookieparser(config.system.cookieKey));
const HTTP = new http.Server(App);

// get Videos
App.get('/getVideo/:path', (req, res) => {
	const directoryPath = `./web/static/video/CAMERA_RECORDINGS/${req.params.path}`;
	const files = fs.readdirSync(directoryPath);
	const videoFiles = files.filter(file => file.endsWith('.mp4'));
	res.json({message: "Success", data: videoFiles.map(filename => `/static/video/CAMERA_RECORDINGS/${req.params.path}/${filename}`)});
})

// Static
App.use('/static', express.static(path.join(__dirname, 'web', 'static')));

// get Cameras
App.get('/api/cameras', (req, res) => {
	const Cams = [];

	Object.keys(config.cameras).forEach((ID) => {
		const Cam = config.cameras[ID];
		Cams.push({ id: ID, name: Cam.name, continuous: Cam.continuous });
	});

	res.type('application/json');
	res.status(200);
	res.end(JSON.stringify(Cams));
});

const Processors = {};
const Cameras = Object.keys(config.cameras);
Cameras.forEach((cameraID) => {
	const Cam = config.cameras[cameraID];
	InitCamera(Cam, cameraID);

});

function InitCamera(Cam, cameraID) {
	console.log(' - Configuring camera: ' + Cam.name);

	const CommandArgs = [];

	Object.keys(Cam.inputConfig).forEach((inputConfigKey) => {
		if (inputConfigKey !== 'i') {
			CommandArgs.push('-' + inputConfigKey);
			if (Cam.inputConfig[inputConfigKey].length > 0) {
				CommandArgs.push(Cam.inputConfig[inputConfigKey]);
			}
		}
	});

	CommandArgs.push('-i');
	CommandArgs.push(Cam.input);

	App.use(
		'/segments/' + cameraID,
		express.static(
			path.join(
				config.system.storageVolume,
				'CAMERA_RECORDINGS',
				cameraID
			),
			{ acceptRanges: true }
		)
	);

	const Path = path.join(
		config.system.storageVolume,
		'CAMERA_RECORDINGS',
		cameraID
	);
	if (!fs.existsSync(Path)) {
		fs.mkdirSync(Path);
	}

	if (Cam.continuous !== undefined && Cam.continuous) {
		CommandArgs.push('-c:v');
		CommandArgs.push('copy');
		CommandArgs.push('-c:a');
		CommandArgs.push('copy');
		CommandArgs.push('-f');
		CommandArgs.push('segment');
		CommandArgs.push('-movflags');
		CommandArgs.push('+faststart');
		CommandArgs.push('-segment_atclocktime');
		CommandArgs.push('1');
		CommandArgs.push('-reset_timestamps');
		CommandArgs.push('1');
		CommandArgs.push('-strftime');
		CommandArgs.push('1');
		CommandArgs.push('-segment_list');
		CommandArgs.push('pipe:4');
		CommandArgs.push('-segment_time');
		CommandArgs.push(60 * config.system.continuousSegTimeMinutes);
		CommandArgs.push(path.join(Path, '%Y-%m-%dT%H:%M:%S.mp4'));
	}

	Object.keys(Cam.liveConfig.streamConfig).forEach((streamingConfigKey) => {
		CommandArgs.push('-' + streamingConfigKey);
		if (Cam.liveConfig.streamConfig[streamingConfigKey].length > 0) {
			CommandArgs.push(Cam.liveConfig.streamConfig[streamingConfigKey]);
		}
	});

	CommandArgs.push('-metadata');
	CommandArgs.push('title="Stream"');
	CommandArgs.push('pipe:3');

	const Options = {
		detached: true,
		stdio: ['ignore', 'ignore', 'ignore', 'pipe', 'pipe']
	};
	const respawn = (Spawned) => {
		const MP4F = new MP4Frag();

		const IOptions = {
			path: '/streams/' + cameraID,
			cors: {
				origin: "*"
			}
		};
		const Socket = io(HTTP, IOptions);
		Socket.on('connection', (ClientSocket) => {
			ClientSocket.emit('segment', MP4F.initialization);
		});

		MP4F.on('segment', (data) => {
			Socket.sockets.sockets.forEach((ClientSocket) => {
				ClientSocket.emit('segment', data);
			});
		});

		Spawned.on('close', () => {
			console.log(
				' - Camera: ' +
					Cam.name +
					' was terminated, respawning after 10 seconds...'
			);
			Spawned.kill();
			MP4F.destroy();
			setTimeout(() => {
				respawn(
					childprocess.spawn(config.system.ffmpegLocation, CommandArgs, Options)
				);
			}, 10000);
		});

		Spawned.stdio[3].on('data', (data) => {
			MP4F.write(data, 'binary');
		});
		Spawned.stdio[4].on('data', (FN) => {
			if (Processors[cameraID] !== undefined) {
				const FileName = FN.toString().trim().replace(/\n/g, '');
				const Start = dayjs(
					FileName.replace(/.mp4/g, ''),
					'YYYY-MM-DDTHH-mm-ss'
				).unix();
				const End = dayjs().unix();
			}
		});
	};

	respawn(
		childprocess.spawn(config.system.ffmpegLocation, CommandArgs, Options)
	);

	Processors[cameraID] = {
		CameraInfo: Cam
	};
}

HTTP.listen(config.system.interfacePort);
console.log(' - VMS is Ready!');
