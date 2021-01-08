/**
 * creating random item locations from Object layers
 */

import gameConfig from '../config/game-config';
import Cow from '../sprites/animals/Cow';
import Chicken from '../sprites/animals/Chicken';
import Sprite from '../sprites/Sprite';

export default class ObjectLoader {
  constructor( config ) {
    this.scene = config.scene;
    this.player = this.scene._PLAYER;
    this.sprites = this.scene._SPRITES;
    this.mapData = config.objectLayers; // array of Object layers created in Tiled

    // physics groups
    this.exitGroup = this.scene.physics.add.group();
    this.interactiveGroup = this.scene.physics.add.group(); // interactive items
  }

  setup() {
    this.parseMapData();
    this.setCollision();
  }

  /**
   * parse data location from Tiled
   */
  parseMapData() {
    this.mapData.forEach( layer => {
      // console.log(layer);
      // for Exit object layer
      if ( layer.name === 'exits' ) {
        layer.objects.forEach( obj => {
          this.addToPhysicsGroup( obj, this.exitGroup, 'exits', 'pixel' );
        });
      }

      // for animals
      if ( layer.name === 'animals' ) {
        layer.objects.forEach( obj => {
          let type = obj.properties[1].value;
          let name = obj.properties[0].value;

          if ( type === 'cow' ) {
            this.sprites[name] = new Cow( { scene: this.scene, x: obj.x, y: obj.y, key: 'cow' }, name, 'animal' );
          }
          else if ( type === 'chicken' ) {
            this.sprites[name] = new Chicken( { scene: this.scene, x: obj.x, y: obj.y, key: 'chicken2' }, name, 'animal' );
          }
          else if ( type === 'calf' ) {}
          else if ( type === 'chick' ) {}
          else if ( type === 'dog' ) {}
          else if ( type === 'horse' ) {}
        });
      }

      // npcs


      // for interactive items, eg: food, crops, flowers
      if ( layer.name === 'interactive' ) {
        layer.objects.forEach( obj => {
          // sign type uses pixel
          if ( this.findPropValue( obj.properties, 'type' ) === 'sign' ) {
            this.addToPhysicsGroup( obj, this.interactiveGroup, 'interactive', 'pixel', 'interactive' );
          } else {
            let key = this.findPropValue( obj.properties, 'name' );
            // otherwise make a sprite w/ img key
            this.sprites[key] = new Sprite( { scene: this.scene, x: obj.x, y: obj.y, key: key }, key, 'interactive' );
          }
        });
      }

    });
  }

  /**
   * creates Sprite from object, adds to physics group
   * https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.Tilemap.html#createFromObjects
   * @param obj : object being passed from
   * @param physicsGroup : group for this new Sprite
   * @param layerName : string name of the Object Layer in Tiled
   * @param keyName : string key of image asset
   * @param type : string value for 'creatureType' property
   */
  addToPhysicsGroup( obj, physicsGroup, layerName, keyName, type = '' ) {
    var newObj = this.scene._MAP.tilemap.createFromObjects( layerName, obj.id, { key: keyName } );
    newObj[0].setOrigin( 0.5, -0.5 );
    newObj[0].name = keyName;
    newObj[0].creatureType = type;
    // console.log( newObj[0]);
    physicsGroup.add( newObj[0] );
  }

  /**
   * finds and returns the value of the passed property name
   * @param props - array of properties
   * @param key - string property name to filter by
   */
  findPropValue( props, key ) {
    return props.reduce( ( initVal, currentVal, currentIndex, arr ) => {
      if ( initVal.name === key ) {
        return initVal.value;
      } else if ( currentVal.name === key ) {
        return currentVal.value;
      }
    });
  }

  // set collisions
  setCollision( ) {
    // for each Exit inside exitGroup, set overlap event
    // https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.ArcadePhysics.html#overlap__anchor
    this.exitGroup.children.entries.forEach( exit => {
      this.scene.physics.add.overlap(
        this.player,
        exit,
        function() {
          this.newScene( exit.data.list[0].value );
        }.bind( this ),
        null,
        this.scene
      );
    } );

    this.interactiveGroup.children.entries.forEach( entry => {
      // console.log( entry.data.list );
      this.scene.physics.add.overlap(
        this.player,
        entry,
        function( player, elm ) {
          // console.log('overlapping sign')
          gameConfig.overlapData.isActive = true;
          gameConfig.overlapData.sprite = elm;
          gameConfig.overlapData.overlap = elm;
        }.bind( this ),
        null,
        this.scene
      );
    } );

  }

  // start scene, based on passed value
  newScene( sceneName ) {
    // update gameConfig
    gameConfig.previousData.scene = gameConfig.loadedScene;
    gameConfig.loadedScene = sceneName;

    // what was the last cursor direction?
    gameConfig.previousData.direction = this.scene._ANIMS.pressedCursor;

    // store player's x/y coords
    gameConfig.previousData.coords = {
      x: this.player.x,
      y: this.player.y
    };

    // restart scene
    this.scene.scene.restart();
  }

}
