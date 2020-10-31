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
    sceneToolShed: {},
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
    sceneCowShed: {},
    sceneCave1: {},

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
    sceneMountains: {},
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
        height: 1280,
        width: 1040
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
    sceneFortuneTeller: {},
    sceneBar: {},
    sceneRestaurant: {},
    sceneToolShop: {}
  },

  // keeping track of your score
  score: 0,

  // day tracker, this game has 5 playable days and 1 final day for the ending
  day: 1,

  // Task menu is open
  taskMenuOpen: false,
};

export default gameConfig;
