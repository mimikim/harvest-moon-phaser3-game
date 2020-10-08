/**
 * Base Game class,
 * - loads in all assets
 * - loads Player and player actions/anims
 * - creates Map, sets camera/world bounds
 * - creates Exits and generates items (game manager)
 */

import Phaser from 'phaser';
import gameConfig from '../config/game-config';
import Map from '../classes/Map';
import ObjectLoader from '../classes/ObjectLoader';
import Player from '../sprites/Player';
import ImageLoader from '../classes/ImageLoader';
import DialogBox from '../classes/DialogBox';
import config from "../config";
// import BoxManager from '../classes/Box/BoxManager';

export default class Game extends Phaser.Scene {
  constructor() {
    super( 'Game' );
  }

  init() {
    // console.log( gameConfig );
    this.loadedScene = gameConfig.loadedScene;
    this.playerSpeed = gameConfig.playerSpeed;
    this.mapVars = gameConfig.map[this.loadedScene];
    this.mapBounds = this.mapVars.mapBounds;

    // default vars
    this.pressedCursor = 'down'; // keeps track of what cursor was pressed previously
  }

  preload() {
    new ImageLoader( this );
  }

  create() {
    // create map
    this.map = new Map({
      scene: this,
      key: this.mapVars.key,
      imgKey: this.mapVars.imgKey,
      tileSetName: this.mapVars.tileSetName,
      bgLayerName: 'background', // all tilesets have a "background" layer
      blockedLayerName: 'blocked' // similarly, they all have "blocked"
    });

    // world bounds
    this.physics.world.bounds.width = this.mapBounds.width;
    this.physics.world.bounds.height = this.mapBounds.height;

    // based on previous map ( gameConfig.previousData.scene ), determine appropriate x/y value and frame
    const playerCoords = this.setPlayerCoords();
    const playerFrame = this.setPlayerDirection();

    // create Jack
    this.player = new Player({
      scene: this,
      x: playerCoords.x,
      y: playerCoords.y,
      key: 'jack-standing',
      frame: playerFrame
    });

    // limit camera to size of map
    this.cameras.main.setBounds(0, 0, this.mapBounds.width, this.mapBounds.height);
    this.cameras.main.startFollow(this.player); // camera follows player

    // enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();

    this.createObjectLoader();  // generate items
    this.createEventListeners();  // event listeners

    this.dialogBox = new DialogBox( this, 'tasks' );
  };

  // update loop
  update() {
    if ( ! gameConfig.pauseUpdateLoop ) {
      // jack walking/bell animations
      this.animation_update_loop();
    }
  }

  // plays animation of passed key
  playAnim( animKey ) {
    if( ! this.player.anims.isPlaying || this.player.anims.currentAnim.key !== animKey ) {
      this.player.anims.play( animKey );
    }
  }

  // animation update loop
  animation_update_loop() {
    if ( this.cursors.down.isDown ) {
      this.player.body.setVelocityY( this.playerSpeed );
      this.pressedCursor = 'down';
      this.playAnim( 'walking-down' );
    }
    else if ( this.cursors.up.isDown ) {
      this.player.body.setVelocityY(-this.playerSpeed );
      this.pressedCursor = 'up';
      this.playAnim( 'walking-up' );
    }
    else if ( this.cursors.left.isDown ) {
      this.player.body.setVelocityX( -this.playerSpeed );
      this.pressedCursor = 'left';
      this.playAnim( 'walking-left' );
    }
    else if ( this.cursors.right.isDown ) {
      this.player.body.setVelocityX( this.playerSpeed );
      this.pressedCursor = 'right';
      this.playAnim( 'walking-right' );
    }
    else {
      this.stopPlayerAnim();
    }
  }

  // stops animation & velocity on player
  stopPlayerAnim() {
    this.player.body.setVelocityY( 0 );
    this.player.body.setVelocityX( 0 );
    this.player.anims.stop();
  }

  // manages chicken/item generation
  createObjectLoader() {
    this.ObjectLoader = new ObjectLoader( {
      scene: this,
      objectLayers: this.map.tilemap.objects
    } );
    this.ObjectLoader.setup();
  }

  createEventListeners() {
    // if SPACE bar is pressed, "ring bell" animaton
    this.input.keyboard.on( 'keydown_SPACE', e => {
      gameConfig.pauseUpdateLoop = true;
      this.stopPlayerAnim();

      switch( this.pressedCursor ) {
        case 'down':
          this.playAnim( 'ring-cowbell-down' );
          break;
        case 'up':
          this.playAnim( 'ring-cowbell-up' );
          break;
        case 'left':
          this.playAnim( 'ring-cowbell-left' );
          break;
        case 'right':
          this.playAnim( 'ring-cowbell-right' );
          break;
        default:
          this.player.setTexture( 'jack-standing', 0 );
      }
    } );

    // on SHIFT, bring up list of tasks, animal status
    this.input.keyboard.on( 'keydown_SHIFT', e => {
      this.dialogBox.loadBox();
    });

    // restart update loop, if not pressing SELECT or SHIFT
    this.input.keyboard.on( 'keydown', function( e ) {
      if ( e.keyCode !== '32'&& e.code !== 'Space'
        && e.keyCode !== '16' && e.code !== 'Shift'
      ) {
        gameConfig.pauseUpdateLoop = false;
      }
    }.bind( this ) );

    // on animation complete, sets standing texture
    this.player.on( 'animationcomplete', function( animation, frame ) {
      switch( this.pressedCursor ) {
        case 'down':
          this.player.setTexture( 'jack-standing', 0 );
          break;
        case 'up':
          this.player.setTexture( 'jack-standing', 1 );
          break;
        case 'left':
          this.player.setTexture( 'jack-standing', 2 );
          break;
        case 'right':
          this.player.setTexture( 'jack-standing', 3 );
          break;
        default:
          this.player.setTexture( 'jack-standing', 0 );
      }
    }, this);

    this.input.keyboard.on('keydown_ESC', function (e) {
      // this.dialogBox.hideBox();
    });
  }

  // returns frame for player's Standing sprite
  setPlayerDirection() {
    switch( gameConfig.previousData.direction ) {
      case 'down':
        return 0;
      case 'up':
        return 1;
      case 'left':
        return 2;
      case 'right':
        return 3;
      default:
        return 0;
    }
  }

  // returns player's loading X/Y coords, based on previous Scene
  setPlayerCoords() {
    const prevScene = gameConfig.previousData.scene;
    const playerCoords = this.mapVars.playerStartPos;

    if ( prevScene.length > 0 && Object.keys( playerCoords ).length > 1 ) {
      return playerCoords[ prevScene ];
    } else {
      // else, no previous scene exists
      return playerCoords.default;
    }
  }

}
