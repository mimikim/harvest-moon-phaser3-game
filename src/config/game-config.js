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
  playerSpeed: 325,
  // playerSpeed: 500,

  // map vars, for loading new Map class
  map: {
    // homestead scenes
    sceneFarm: {
      key: 'map-farm', // tilemap key in preload
      imgKey: 'farm',
      tileSetName: 'farm-tileset-20px',
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
      tileSetName: 'home-tileset-20px',
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
      tileSetName: 'tool-shed-tileset-20px',
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
      tileSetName: 'coop-tileset-20px',
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
      tileSetName: 'cow-shed-tileset-20px',
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
      tileSetName: 'crossroads-tileset-20px',
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
      tileSetName: 'mountains-tileset-20px',
      mapBounds: {
        height: 3680,
        width: 3840
      },
      playerStartPos: {
        sceneCrossRoads: {
          x: 1700,
          y: 3550
        },
        sceneMountainHome: {
          x: 2600,
          y: 2750
        },
        sceneCliff: {
          x: 1500,
          y: 300
        },
        default: {
          x: 1700,
          y: 3550
        },
      }
    },
    sceneMountainHome: {
      key: 'map-mountain-home',
      imgKey: 'mountain-home',
      tileSetName: 'mountain-home-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneMountains: {
          x: 645,
          y: 970
        },
        default: {
          x: 645,
          y: 970
        },
      }
    },
    sceneCliff: {},
    sceneCave2: {},

    // town scenes
    sceneTown: {
      key: 'map-town',
      imgKey: 'town',
      tileSetName: 'town-tileset-20px',
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
        sceneManor: {
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
        sceneAnimalShop: {
          x: 3000,
          y: 4440
        },
        default: {
          x: 3770,
          y: 2095
        }
      },
      chunks: true,

    },
    sceneFlorist: {
      key: 'map-florist',
      imgKey: 'florist',
      tileSetName: 'florist-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 720,
          y: 850
        },
        sceneBedroomFlorist: {
          x: 520,
          y: 270
        },
        default: {
          x: 720,
          y: 850
        }
      }
    },
    sceneChurch: {
      key: 'map-church',
      imgKey: 'church',
      tileSetName: 'church-tileset-20px',
      mapBounds: {
        height: 2360,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 645,
          y: 2200
        },
        default: {
          x: 645,
          y: 2200
        },
      }
    },
    sceneManor: {
      key: 'map-manor',
      imgKey: 'manor',
      tileSetName: 'manor-tileset-20px',
      mapBounds: {
        height: 1000,
        width: 2160
      },
      playerStartPos: {
        sceneTown: {
          x: 560,
          y: 750
        },
        sceneManorHallway: {
          x: 688,
          y: 300
        },
        default: {
          x: 560,
          y: 750
        },
      }
    },
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
    sceneBar: {
      key: 'map-bar',
      imgKey: 'bar',
      tileSetName: 'bar-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 730,
          y: 880
        },
        sceneBedroomBar: {
          x: 680,
          y: 250
        },
        default: {
          x: 730,
          y: 880
        },
      }
    },
    sceneRestaurant: {
      key: 'map-restaurant',
      imgKey: 'restaurant',
      tileSetName: 'restaurant-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 720,
          y: 880
        },
        sceneBedroomRestaurant: {
          x: 520,
          y: 270
        },
        default: {
          x: 720,
          y: 880
        },
      }
    },
    sceneToolShop: {
      key: 'map-toolshop',
      imgKey: 'toolshop',
      tileSetName: 'tools-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 720,
          y: 880
        },
        sceneBedroomTools: {
          x: 520,
          y: 270
        },
        default: {
          x: 720,
          y: 880
        },
      }
    },
    sceneAnimalShop: {
      key: 'map-animal-shop',
      imgKey: 'animal-shop',
      tileSetName: 'animal-shop-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneTown: {
          x: 640,
          y: 960
        },
        default: {
          x: 640,
          y: 960
        },
      }
    },

    // townspeople bedroom
    sceneBedroomBar: {
      key: 'map-bedroom-bar',
      imgKey: 'bedroom-bar',
      tileSetName: 'bedroom-bar-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneBar: {
          x: 675,
          y: 950
        },
        default: {
          x: 675,
          y: 950
        },
      }
    },
    sceneBedroomManor: {
      key: 'map-bedroom-manor',
      imgKey: 'bedroom-manor',
      tileSetName: 'bedroom-manor-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneManorHallway: {
          x: 770,
          y: 430
        },
        default: {
          x: 770,
          y: 430
        },
      }
    },
    sceneManorHallway: {
      key: 'map-manor-hallway',
      imgKey: 'manor-hallway',
      tileSetName: 'manor-hallway-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneManor: {
          x: 880,
          y: 700
        },
        sceneBedroomManor: {
          x: 400,
          y: 700
        },
        default: {
          x: 880,
          y: 700
        },
      }
    },
    sceneBedroomRestaurant: {
      key: 'map-bedroom-restaurant',
      imgKey: 'bedroom-restaurant',
      tileSetName: 'bedroom-restaurant-tileset-20px',
      mapBounds: {
        height: 1040,
        width: 1280
      },
      playerStartPos: {
        sceneRestaurant: {
          x: 520,
          y: 880
        },
        default: {
          x: 520,
          y: 880
        },
      }
    },
    sceneBedroomTools: {
      key: 'map-bedroom-tools',
      imgKey: 'bedroom-tools',
      tileSetName: 'bedroom-tools-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneToolShop: {
          x: 520,
          y: 880
        },
        default: {
          x: 520,
          y: 880
        },
      }
    },
    sceneBedroomFlorist: {
      key: 'map-bedroom-florist',
      imgKey: 'bedroom-florist',
      tileSetName: 'bedroom-florist-tileset-20px',
      mapBounds: {
        height: 1120,
        width: 1280
      },
      playerStartPos: {
        sceneFlorist: {
          x: 520,
          y: 880
        },
        default: {
          x: 520,
          y: 880
        },
      }
    }
  },

  // keeping track of your score
  score: 0,

  // day tracker, this game has 5 playable days and 1 final day for the ending
  day: 1,

  // Task menu is open
  taskMenuOpen: false,

  // player is overlapping sprite's dialog rectangle
  overlapData: {
    isActive: false,
    overlap: {},
    sprite: {}
  },

  // finding the baby cow opens up additional dialog
  foundBabyCow: true,

};

export default gameConfig;
