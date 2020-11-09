import gameConfig from "../config/game-config";

/**
 * Loads all images, based on passed Scene
 * called in Game scene's preload()
 */

export default class ImageLoader {
  constructor( scene ) {
    this.scene = scene;
    this.sceneName = gameConfig.loadedScene;
    this.loadBackground( this.sceneName );
    this.loadPeople();
    this.loadAnimals();
    this.loadItems();
  }

  // loads images, based on passed scene name
  loadBackground( sceneName ) {
    switch( sceneName ) {
      // farm backgrounds
      case 'sceneFarm': {
        this.scene.load.image( 'farm', 'images/background/farm.png' );
        this.scene.load.tilemapTiledJSON( 'map-farm', 'levels/homestead/farm-20px.json' );
        break;
      }
      case 'sceneHome': {
        this.scene.load.image( 'home', 'images/background/home.png' );
        this.scene.load.tilemapTiledJSON( 'map-home', 'levels/homestead/home-20px.json' );
        break;
      }
      case 'sceneCoop': {
        this.scene.load.image( 'coop', 'images/background/chicken-coop.png' );
        this.scene.load.tilemapTiledJSON( 'map-coop', 'levels/homestead/coop-20px.json' );
        break;
      }
      case 'sceneCowShed': {
        this.scene.load.image( 'cowshed', 'images/background/cow-shed.png' );
        this.scene.load.tilemapTiledJSON( 'map-cowshed', 'levels/homestead/cow-shed-20px.json' );
        break;
      }
      case 'sceneCave1': {
        this.scene.load.image( 'cave1', 'images/background/cave1.png' );
        this.scene.load.tilemapTiledJSON( 'map-cave1', 'levels/homestead/cave1-20px.json' );
        break;
      }
      case 'sceneToolShed': {
        this.scene.load.image( 'toolshed', 'images/background/tool-shed.png' );
        this.scene.load.tilemapTiledJSON( 'map-toolshed', 'levels/homestead/tool-shed-20px.json' );
        break;
      }

      // mountains
      case 'sceneCrossRoads': {
        this.scene.load.image( 'crossroads', 'images/background/crossroads.png' );
        this.scene.load.tilemapTiledJSON( 'map-crossroads', 'levels/mountains/crossroads-20px.json' );
        break;
      }
      case 'sceneMountains': {
        this.scene.load.image( 'mountains', 'images/background/mountains-bare.png' );
        this.scene.load.tilemapTiledJSON( 'map-mountains', 'levels/mountains/mountains-20px.json' );
        break;
      }
      case 'sceneCliff': {
        this.scene.load.image( 'cliff', 'images/background/cliff.png' );
        // this.scene.load.tilemapTiledJSON( 'map-cliff', 'levels/mountains/cliff-20px.json' );
        break;
      }
      case 'sceneCave2': {
        this.scene.load.image( 'cave2', 'images/background/cave2.png' );
        // this.scene.load.tilemapTiledJSON( 'map-cave2', 'levels/mountains/cave2-20px.json' );
        break;
      }
      case 'sceneMountainHome': {
        this.scene.load.image( 'mountain-home', 'images/background/mountain-home.png' );
        this.scene.load.tilemapTiledJSON( 'map-mountain-home', 'levels/mountains/mountain-home-20px.json' );
        break;
      }

      // town
      case 'sceneTown': {
        this.scene.load.image( 'town', 'images/background/town.png' );
        this.scene.load.tilemapTiledJSON( 'map-town', 'levels/town/town-20px.json' );
        break;
      }
      case 'sceneBar': {
        this.scene.load.image( 'bar', 'images/background/building-bar.png' );
        this.scene.load.tilemapTiledJSON( 'map-bar', 'levels/town/bar-20px.json' );
        break;
      }
      case 'sceneRestaurant': {
         this.scene.load.image( 'restaurant', 'images/background/building-restaurant.png' );
         this.scene.load.tilemapTiledJSON( 'map-restaurant', 'levels/town/restaurant-20px.json' );
        break;
      }
      case 'sceneToolShop': {
        this.scene.load.image( 'toolshop', 'images/background/building-tools.png' );
        this.scene.load.tilemapTiledJSON( 'map-toolshop', 'levels/town/tools-20px.json' );
        break;
      }
      case 'sceneFortuneTeller': {
        this.scene.load.image( 'fortuneteller', 'images/background/building-fortuneteller.png' );
        this.scene.load.tilemapTiledJSON( 'map-fortuneteller', 'levels/town/fortuneteller-20px.json' );
        break;
      }
      case 'sceneFlorist': {
        this.scene.load.image( 'florist', 'images/background/building-florist.png' );
        this.scene.load.tilemapTiledJSON( 'map-florist', 'levels/town/florist-20px.json' );
        break;
      }
      case 'sceneChurch': {
        this.scene.load.image( 'church', 'images/background/building-church.png' );
        this.scene.load.tilemapTiledJSON( 'map-church', 'levels/town/church-20px.json' );
        break;
      }
      case 'sceneManor': {
        this.scene.load.image( 'manor', 'images/background/building-manor.png' );
        this.scene.load.tilemapTiledJSON( 'map-manor', 'levels/town/manor-20px.json' );
        break;
      }
      case 'sceneAnimalShop': {
        this.scene.load.image( 'animal-shop', 'images/background/building-animal-shop.png' );
        this.scene.load.tilemapTiledJSON( 'map-animal-shop', 'levels/town/animal-shop-20px.json' );
        break;
      }

      // town bedrooms
      case 'sceneBedroomBar': {
        this.scene.load.image( 'bedroom-bar', 'images/background/bedroom-bar.png' );
        this.scene.load.tilemapTiledJSON( 'map-bedroom-bar', 'levels/town/bedroom-bar-20px.json' );
        break;
      }
      case 'sceneBedroomManor': {
        this.scene.load.image( 'bedroom-manor', 'images/background/bedroom-manor.png' );
        this.scene.load.tilemapTiledJSON( 'map-bedroom-manor', 'levels/town/bedroom-manor-20px.json' );
        break;
      }
      case 'sceneManorHallway': {
        this.scene.load.image( 'manor-hallway', 'images/background/building-manor-hallway.png' );
        this.scene.load.tilemapTiledJSON( 'map-manor-hallway', 'levels/town/manor-hallway-20px.json' );
        break;
      }
      case 'sceneBedroomRestaurant': {
        this.scene.load.image( 'bedroom-restaurant', 'images/background/bedroom-restaurant.png' );
        this.scene.load.tilemapTiledJSON( 'map-bedroom-restaurant', 'levels/town/bedroom-restaurant-20px.json' );
        break;
      }
      case 'sceneBedroomTools': {
        this.scene.load.image( 'bedroom-tools', 'images/background/bedroom-tools.png' );
        this.scene.load.tilemapTiledJSON( 'map-bedroom-tools', 'levels/town/bedroom-tools-20px.json' );
        break;
      }
      case 'sceneBedroomFlorist': {
        this.scene.load.image( 'bedroom-florist', 'images/background/bedroom-florist.png' );
        this.scene.load.tilemapTiledJSON( 'map-bedroom-florist', 'levels/town/bedroom-florist-20px.json' );
        break;
      }
      default:
        break;
    }
  }

  // all people
  loadPeople() {
    this.spritesJack();
    this.spritesNPCs();
    this.spritesForestSpirits();
  }

  // all animals
  loadAnimals() {
    this.spritesCows();
    this.spritesChickens();
    this.spritesOtherAnimals();
  }

  // all items
  loadItems() {
    this.spritesFlowers();
    this.spritesFood();
    this.spritesMisc();
  }

  // jack sprites
  spritesJack() {
    this.scene.load.spritesheet( 'jack-walking', 'images/people/jack/jack-walking.png', {
      frameWidth: 80,
      frameHeight: 120,
    } );
    this.scene.load.spritesheet( 'jack-standing', 'images/people/jack/jack-standing.png', {
      frameWidth: 80,
      frameHeight: 115,
    } );
    this.scene.load.spritesheet( 'jack-sick', 'images/people/jack/jack-sick.png', {
      frameWidth: 90,
      frameHeight: 120,
    } );
    this.scene.load.spritesheet( 'jack-eating', 'images/people/jack/jack-eating.png', {
      frameWidth: 96,
      frameHeight: 120,
    } );
    this.scene.load.spritesheet( 'jack-ring-cowbell-down', 'images/people/jack/jack-cowbell-down.png', {
      frameWidth: 120,
      frameHeight: 180,
    } );
    this.scene.load.spritesheet( 'jack-ring-cowbell-up', 'images/people/jack/jack-cowbell-up.png', {
      frameWidth: 100,
      frameHeight: 150,
    } );
    this.scene.load.spritesheet( 'jack-ring-cowbell-left', 'images/people/jack/jack-cowbell-left.png', {
      frameWidth: 150,
      frameHeight: 160,
    } );
    this.scene.load.spritesheet( 'jack-ring-cowbell-right', 'images/people/jack/jack-cowbell-right.png', {
      frameWidth: 150,
      frameHeight: 160,
    } );
  }

  // NPC sprites
  spritesNPCs() {
    this.scene.load.spritesheet( 'npc-drunk', 'images/people/npc/drunk.png', {
      frameWidth: 135,
      frameHeight: 120,
    } );

    this.scene.load.spritesheet( 'fortune-teller-walk-side', 'images/people/npc/fortune-teller-side.png', {
      frameWidth: 80,
      frameHeight: 110,
    } );

    this.scene.load.spritesheet( 'restaurant-owner-walk-side', 'images/people/npc/restaurant-owner-side.png', {
      frameWidth: 85,
      frameHeight: 140,
    } );
  }

  // forest spirit sprites
  spritesForestSpirits() {
    this.scene.load.image( 'elf', 'images/people/forestspirit/elf.png' );
  }

  // cow sprites
  spritesCows() {
    this.scene.load.image( 'cow', 'images/animals/cow/cow.png' );

    this.scene.load.spritesheet( 'cow-eating-front', 'images/animals/cow/cow-eating-front.png', {
      frameWidth: 85,
      frameHeight: 115,
    } );
    this.scene.load.spritesheet( 'cow-eating-side', 'images/animals/cow/cow-eating-side.png', {
      frameWidth: 150,
      frameHeight: 105,
    } );
    this.scene.load.spritesheet( 'cow-happy-side', 'images/animals/cow/cow-happy-side.png', {
      frameWidth: 135,
      frameHeight: 110,
    } );
    this.scene.load.spritesheet( 'cow-shocked', 'images/animals/cow/cow-shocked.png', {
      frameWidth: 140,
      frameHeight: 115,
    } );
    this.scene.load.spritesheet( 'cow-sleeping-front', 'images/animals/cow/cow-sleeping-front.png', {
      frameWidth: 85,
      frameHeight: 110,
    } );
    this.scene.load.spritesheet( 'cow-sleeping-side', 'images/animals/cow/cow-sleeping-side.png', {
      frameWidth: 150,
      frameHeight: 100,
    } );

    // baby cow
    this.scene.load.spritesheet( 'cow-baby-happy', 'images/animals/cow/cow-baby-happy.png', {
      frameWidth: 90,
      frameHeight: 80,
    } );
    this.scene.load.spritesheet( 'cow-baby-sleeping', 'images/animals/cow/cow-baby-sleeping.png', {
      frameWidth: 120,
      frameHeight: 70,
    } );
    this.scene.load.spritesheet( 'cow-baby-sweating', 'images/animals/cow/cow-baby-sweating.png', {
      frameWidth: 125,
      frameHeight: 80,
    } );
    this.scene.load.spritesheet( 'cow-baby-tail-wag', 'images/animals/cow/cow-baby-tail-wag.png', {
      frameWidth: 105,
      frameHeight: 80,
    } );
  }

  // chicken sprites
  spritesChickens() {
    this.scene.load.image( 'chicken', 'images/animals/chicken/chicken.png' );
    this.scene.load.image( 'chicken2', 'images/animals/chicken/chicken2.png' );

    this.scene.load.spritesheet( 'chicken-walking', 'images/animals/chicken/chicken-walking.png', {
      frameWidth: 80,
      frameHeight: 80,
    } );
    this.scene.load.spritesheet( 'chicken-sleeping', 'images/animals/chicken/chicken-sleeping.png', {
      frameWidth: 80,
      frameHeight: 75,
    } );

    // chick
    this.scene.load.spritesheet( 'chick-resting', 'images/animals/chicken/chick-resting.png', {
      frameWidth: 40,
      frameHeight: 50,
    } );
    this.scene.load.spritesheet( 'chick-walking', 'images/animals/chicken/chick-move-front.png', {
      frameWidth: 45,
      frameHeight: 55,
    } );
    this.scene.load.spritesheet( 'chick-move-back', 'images/animals/chicken/chick-move-back.png', {
      frameWidth: 40,
      frameHeight: 55,
    } );
  }

  // other animal sprites
  spritesOtherAnimals() {
    this.scene.load.spritesheet( 'fish-flopping','images/animals/other/fish-flopping.png', {
      frameWidth: 80,
      frameHeight: 65,
    } );

    this.scene.load.image( 'fish', 'images/animals/other/fish.png' );
    this.scene.load.image( 'mole', 'images/animals/other/mole.png' );

    this.scene.load.image( 'dog', 'images/animals/other/dog.png' );
  }

  // flower sprites
  spritesFlowers() {
    this.scene.load.image( 'fancyflower-summer', 'images/items/flowers/fancyflower-summer.png' );
    this.scene.load.image( 'fancyflower', 'images/items/flowers/fancyflower.png' );
    this.scene.load.image( 'flower', 'images/items/flowers/flower.png' );
    this.scene.load.image( 'herb', 'images/items/flowers/herb.png' );
    this.scene.load.image( 'powerberry-flower', 'images/items/flowers/powerberry-flower.png' );
    this.scene.load.image( 'weed-autumn', 'images/items/flowers/weed-autumn.png' );
    this.scene.load.image( 'weed', 'images/items/flowers/weed.png' );
    this.scene.load.image( 'winterflower', 'images/items/flowers/winterflower.png' );
  }

  // food sprites
  spritesFood() {
    this.scene.load.image( 'berry-of-wild-grape', 'images/items/food/berryofwildgrape.png' );
    this.scene.load.image( 'cake', 'images/items/food/cake.png' );
    this.scene.load.image( 'corn', 'images/items/food/corn.png' );
    this.scene.load.image( 'croissant', 'images/items/food/croissant.png' );
    this.scene.load.image( 'dumpling', 'images/items/food/dumpling.png' );
    this.scene.load.image( 'mushroom-poisonous', 'images/items/food/mushroom-poisonous.png' );
    this.scene.load.image( 'mushroom', 'images/items/food/mushroom.png' );
    this.scene.load.image( 'potato', 'images/items/food/potato.png' );
    this.scene.load.image( 'powerberry', 'images/items/food/powerberry.png' );
    this.scene.load.image( 'rice-cake', 'images/items/food/rice-cake.png' );
    this.scene.load.image( 'summerfruit', 'images/items/food/summerfruit.png' );
    this.scene.load.image( 'tomato', 'images/items/food/tomato.png' );
    this.scene.load.image( 'turnip', 'images/items/food/turnip.png' );
  }

  // misc sprites
  spritesMisc() {
    this.scene.load.image( 'pixel', 'images/items/misc/pixel.png' );
    this.scene.load.image( 'close-btn', 'images/items/misc/close-btn.png' );
    this.scene.load.image( 'scroll-btn', 'images/items/misc/arrow-down.png' );
    this.scene.load.image( 'btn-status', 'images/items/misc/btn-status.png' );
    this.scene.load.image( 'btn-status-inactive', 'images/items/misc/btn-status-inactive.png' );
    this.scene.load.image( 'btn-tasks', 'images/items/misc/btn-tasks.png' );
    this.scene.load.image( 'btn-tasks-inactive', 'images/items/misc/btn-tasks-inactive.png' );

    this.scene.load.image( 'chicken-statue', 'images/items/misc/chicken-statue.png' );
    this.scene.load.image( 'hay', 'images/items/misc/hay.png' );
    this.scene.load.image( 'rock', 'images/items/misc/rock.png' );
  }

}
