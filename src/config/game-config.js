// game config vars, to be updated during the game

let gameConfig = {
  // on game init, start at this scene
  loadedScene: 'sceneFarm',

  // pause loop so you can do event-listener anims
  pauseUpdateLoop: false,

  // previous Scene data
  previousData: {
    scene: '', // previously loaded Scene
    direction: '', // previous Scene's player direction
  },

  // player default movement speed
  playerSpeed: 300,

  // map vars, for loading new Map class
  map: {
    // homestead scenes
    sceneFarm: {
      key: 'map-farm', // tilemap key in preload
      imgKey: 'farm',
      tileSetName: 'farm-tilesheet-20px',
      // height/width of scene maps
      mapBounds: {
        height: 2880,
        width: 2960
      },
      // player x/y coords based off of what the previous loaded Scene is
      playerStartPos: {
        default: {
          x: 680,
          y: 1730
        },
        sceneHome: {
          x: 680,
          y: 1730
        },
        sceneCoop: {
          x: 2275,
          y: 1780
        },
        sceneToolShed: {
          x: 2115,
          y: 2420
        },
        sceneCrossRoads: {
          x: 100,
          y: 2200
        },
        sceneCowShed: {
          x: 1640,
          y: 1780
        }
      }
    },
    sceneHome: {
      key: 'map-home',
      imgKey: 'home',
      tileSetName: 'home',
      mapBounds: {
        height: 1040,
        width: 2080
      },
      playerStartPos: {
        default: {
          x: 630,
          y: 845
        }
      }
    },
    sceneToolShed: {
      key: 'map-toolshed',
      imgKey: 'toolshed',
      tileSetName: 'tool-shed-tilesheet-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        default: {
          x: 640,
          y: 940
        },
        sceneFarm: {
          x: 640,
          y: 940
        },
        sceneCave1: {
          x: 600,
          y: 300
        },
      }
    },
    sceneCoop: {
      key: 'map-coop',
      imgKey: 'coop',
      tileSetName: 'coop-tilesheet-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        default: {
          x: 645,
          y: 950
        }
      }
    },
    sceneCowShed: {
      key: 'map-cowshed',
      imgKey: 'cowshed',
      tileSetName: 'cow-shed-tilesheet-20px',
      mapBounds: {
        height: 1840,
        width: 1280
      },
      playerStartPos: {
        default: {
          x: 640,
          y: 1700
        },
        sceneFarm: {
          x: 640,
          y: 1700
        },
      }
    },
    sceneCave1: {
      key: 'map-cave1',
      imgKey: 'cave1',
      tileSetName: 'cave1-tileset-20px',
      mapBounds: {
        height: 3680,
        width: 1280
      },
      playerStartPos: {
        default: {
          x: 480,
          y: 680
        },
        sceneFarm: {
          x: 1000,
          y: 3000
        },
        sceneToolShed: {
          x: 480,
          y: 680
        },
      }
    },

    // mountains
    sceneCrossRoads: {
      key: 'map-crossroads',
      imgKey: 'crossroads',
      tileSetName: 'crossroads-tilesheet-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneFarm: {
          x: 1200,
          y: 600
        },
        sceneMountains: {
          x: 640,
          y: 105
        },
        sceneTown: {
          x: 85,
          y: 600
        },
        default: {
          x: 1200,
          y: 600
        },
      }
    },
    sceneMountains: {
      key: 'map-mountains',
      imgKey: 'mountains',
      tileSetName: 'mountain-tileset-20px',
      mapBounds: {
        height: 3700,
        width: 3840
      },
      playerStartPos: {
        sceneCrossRoads: {
          x: 1700,
          y: 3550
        },
        default: {
          x: 1700,
          y: 3550
        },
      }
    },
    sceneCliff: {},
    sceneCave2: {},

    // town scenes
    sceneTown: {
      key: 'map-town',
      imgKey: 'town',
      tileSetName: 'town-tilesheet-20px',
      mapBounds: {
        height: 4960,
        width: 3840
      },
      playerStartPos: {
        sceneCrossRoads: {
          x: 3770,
          y: 2098
        },
        sceneFlorist: {
          x: 3000,
          y: 1140
        },
        sceneChurch: {
          x: 1840,
          y: 765
        },
        sceneMayor: {
          x: 760,
          y: 735
        },
        sceneFortuneTeller: {
          x: 2920,
          y: 3060
        },
        sceneBar: {
          x: 760,
          y: 4340
        },
        sceneRestaurant: {
          x: 1400,
          y: 4340
        },
        sceneToolShop: {
          x: 2040,
          y: 4340
        },
        default: {
          x: 3770,
          y: 2095
        }
      }
    },
    sceneFlorist: {
      key: 'map-florist',
      imgKey: 'florist',
      tileSetName: 'florist-tilesheet-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 720,
          y: 850
        },
        default: {
          x: 720,
          y: 850
        }
      }
    },
    sceneChurch: {},
    sceneMayor: {},
    sceneFortuneTeller: {
      key: 'map-fortuneteller',
      imgKey: 'fortuneteller',
      tileSetName: 'fortuneteller-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1120
      },
      playerStartPos: {
        default: {
          x: 560,
          y: 900
        },
        sceneTown: {
          x: 560,
          y: 900
        },
      }
    },
    sceneBar: {},
    sceneRestaurant: {},
    sceneToolShop: {},
    sceneAnimalShop: {}
  },

  // keeping track of your score
  score: 0,

  // day tracker, this game has 5 playable days and 1 final day for the ending
  day: 1,

  // Task menu is open
  taskMenuOpen: false,
};

export default gameConfig;
