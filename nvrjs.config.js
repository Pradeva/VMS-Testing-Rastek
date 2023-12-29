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
		storageVolume: '/home/pradeva/Documents/NVR OUTSIDE NODE MODULES/nvr-js/web/static/video',
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
            "continuous": true,
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
        "CAM-021": {
            "path": "CAM-021",
            "name": "NVR 4",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
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
        "CAM-022": {
            "path": "CAM-022",
            "name": "NVR 5",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
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
        "CAM-023": {
            "path": "CAM-023",
            "name": "NVR 6",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
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
        "CAM-024": {
            "path": "CAM-024",
            "name": "NVR 7",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
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
        "CAM-026": {
            "path": "CAM-026",
            "name": "NVR 9",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
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
        "CAM-001": {
            "path": "CAM-001",
            "name": "NVR 10",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
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
        "CAM-006": {
            "path": "CAM-006",
            "name": "HikVision 1",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:ipcam@reog39@10.50.0.14/cam/realmonitor?channel=1&subtype=00",
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
        "CAM-014": {
            "path": "CAM-014",
            "name": "DAHUA/IMOU 1",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:YXMOYX@10.50.0.26/cam/realmonitor?channel=1&subtype=00",
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
        "CAM-016": {
            "path": "CAM-016",
            "name": "Ezviz 3",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:JHOXMI@10.50.0.35/cam/realmonitor?channel=1&subtype=00",
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
        "CAM-100": {
            "path": "CAM-100",
            "name": "NVR 100",
            "floor": "JPO-002",
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
        "CAM-101": {
            "path": "CAM-101",
            "name": "NVR 101",
            "floor": "JPO-002",
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
        "CAM-102": {
            "path": "CAM-102",
            "name": "NVR 102",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
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
        "CAM-103": {
            "path": "CAM-103",
            "name": "NVR 103",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
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
        "CAM-104": {
            "path": "CAM-104",
            "name": "NVR 104",
            "floor": "JPO-002",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
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
        "CAM-301": {
            "path": "CAM-301",
            "name": "NVR 301",
            "floor": "JPO-003",
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
        "CAM-302": {
            "path": "CAM-302",
            "name": "NVR 302",
            "floor": "JPO-003",
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
        "CAM-303": {
            "path": "CAM-303",
            "name": "NVR 303",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0601/picture",
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
        "CAM-304": {
            "path": "CAM-304",
            "name": "NVR 304",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0701/picture",
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
        "CAM-305": {
            "path": "CAM-305",
            "name": "NVR 305",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0801/picture",
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
        "CAM-306": {
            "path": "CAM-306",
            "name": "NVR 306",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0901/picture",
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
        "CAM-307": {
            "path": "CAM-307",
            "name": "NVR 307",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/1401/picture",
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
        "CAM-308": {
            "path": "CAM-308",
            "name": "NVR 308",
            "floor": "JPO-003",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0101/picture",
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
        }
	}
};
