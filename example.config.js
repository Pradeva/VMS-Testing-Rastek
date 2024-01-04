module.exports = {
	/* System Settings */
	system: {
		/* Username */
		username: "admin",
		/* bcrypt password (default: admin) */
		password: '$2a$10$CnOx/6vFY2ehRDf68yqd..aLlv0UM.zeBLKnRjuU8YykCsC2Ap3iG',
		/* bcrypt API Key (default: x7Te9m38JHQq6ddv) */
		apiKey: '$2a$10$N53ci.EIQ7JCu6u1HlOjoO//W0Bmp3GrRruyK1Jysr01CQ1rDrVQK',
		/* Any random string */
		cookieKey: 'f3gi6FLhIPVV31d1TBQUPEAngrI3wAoP',
		interfacePort: 7878,
		/* location used for 24/7 recording and database generation */
		/* This should be the root of a mount point i.e a dedicated HDD for 24/7 recordings */
		storageVolume: '/home/rastek/VMS/VMS-Testing-Rastek/web/static/video',
		/* Continuous recording settings */
		ffmpegLocation: '/usr/bin/ffmpeg',
		continuousSegTimeMinutes: 15,
		continuousDays: 14,
		continuousPurgeIntervalHours: 24,
		/* event throttle per sensorId */
		eventSensorIdCoolOffSeconds: 60
	},
	/* Cameras */
	cameras: {
		"CAM-018": {
            "path": "CAM-018",
            "name": "NVR 1",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
            "continuous": false,
            "liveConfig": {
                "codecString": "video/mp4; codecs=\"avc1.64001f\"",
                "streamConfig": {
                    "an": "",
                    "vcodec": "copy",
                    "f": "mp4",
                    "movflags": "+frag_keyframe+empty_moov+default_base_moof",
                    "reset_timestamps": "1"
                }
            }
        },
        "CAM-020": {
            "path": "CAM-020",
            "name": "NVR 3",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
            "continuous": false,
            "liveConfig": {
                "codecString": "video/mp4; codecs=\"avc1.64001f\"",
                "streamConfig": {
                    "an": "",
                    "vcodec": "copy",
                    "f": "mp4",
                    "movflags": "+frag_keyframe+empty_moov+default_base_moof",
                    "reset_timestamps": "1"
                }
            }
        },
        // "CAM-021": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-022": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-023": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-024": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-026": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-001": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-006": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-014": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-016": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-100": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-101": {
        //     "path": "CAM-101",
        //     "name": "NVR 101",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-102": {
        //     "path": "CAM-102",
        //     "name": "NVR 102",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-103": {
        //     "path": "CAM-103",
        //     "name": "NVR 103",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-104": {
        //     "path": "CAM-104",
        //     "name": "NVR 104",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-301": {
        //     "path": "CAM-301",
        //     "name": "NVR 301",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-302": {
        //     "path": "CAM-302",
        //     "name": "NVR 302",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-303": {
        //     "path": "CAM-303",
        //     "name": "NVR 303",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-304": {
        //     "path": "CAM-304",
        //     "name": "NVR 304",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-305": {
        //     "path": "CAM-305",
        //     "name": "NVR 305",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-306": {
        //     "path": "CAM-306",
        //     "name": "NVR 306",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-307": {
        //     "path": "CAM-307",
        //     "name": "NVR 307",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-308": {
        //     "path": "CAM-308",
        //     "name": "NVR 308",
        //     "floor": "JPO-003",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-025": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-026": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-027": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-028": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-029": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-030": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-031": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-032": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-033": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-034": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-035": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-036": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-037": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-038": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-039": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-040": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-041": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-042": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-043": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-044": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-045": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-046": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-047": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-048": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-049": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-050": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-051": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-052": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-053": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-054": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-055": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-056": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-057": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-058": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-059": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-060": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },"CAM-061": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-062": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-063": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-064": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-065": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-066": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-067": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-068": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-069": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-070": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-071": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-072": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-073": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-074": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-075": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-076": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-077": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-078": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-079": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-080": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-081": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-082": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-083": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-084": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-085": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-086": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-087": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-088": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-089": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-090": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-091": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-092": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-093": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-094": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-095": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-096": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-097": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-098": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-099": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-100": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-101": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-102": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-103": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-104": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-105": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-106": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-107": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-108": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-109": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-110": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-111": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-112": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-113": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-114": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-115": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-116": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },"CAM-117": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-118": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-119": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-120": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-121": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-122": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-123": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-124": {
        //     "path": "CAM-100",
        //     "name": "NVR 100",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-125": {
        //     "path": "CAM-025",
        //     "name": "NVR 1",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-126": {
        //     "path": "CAM-020",
        //     "name": "NVR 3",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-127": {
        //     "path": "CAM-021",
        //     "name": "NVR 4",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-128": {
        //     "path": "CAM-022",
        //     "name": "NVR 5",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-129": {
        //     "path": "CAM-023",
        //     "name": "NVR 6",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-130": {
        //     "path": "CAM-024",
        //     "name": "NVR 7",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-131": {
        //     "path": "CAM-026",
        //     "name": "NVR 9",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-132": {
        //     "path": "CAM-001",
        //     "name": "NVR 10",
        //     "floor": "JPO-001",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-133": {
        //     "path": "CAM-006",
        //     "name": "HikVision 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-134": {
        //     "path": "CAM-014",
        //     "name": "DAHUA/IMOU 1",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // },
        // "CAM-135": {
        //     "path": "CAM-016",
        //     "name": "Ezviz 3",
        //     "floor": "JPO-002",
        //     "inputConfig": {
        //         "use_wallclock_as_timestamps": "1",
        //         "fflags": "+igndts",
        //         "analyzeduration": "1000000",
        //         "probesize": "1000000",
        //         "rtsp_transport": "tcp",
        //         "stimeout": "30000000"
        //     },
        //     "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
        //     "continuous": false,
        //     "liveConfig": {
        //         "codecString": "video/mp4; codecs=\"avc1.64001f\"",
        //         "streamConfig": {
        //             "an": "",
        //             "vcodec": "copy",
        //             "f": "mp4",
        //             "movflags": "+frag_keyframe+empty_moov+default_base_moof",
        //             "reset_timestamps": "1"
        //         }
        //     }
        // }
	}
};
