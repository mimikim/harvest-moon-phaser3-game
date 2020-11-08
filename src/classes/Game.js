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
import BoxManager from '../classes/Box/BoxManager';

export default class Game extends Phaser.Scene {
  constructor() {
    super( 'Game' );
  }

  init() {
    // console.log( gameConfig );

    // containers
    this._ANIMS = {
      pressedCursor: 'down', // keeps track of what cursor was pressed previously
      actionAnimation: '', // stores action animation to play on SPACE press
    };

    this._BTNS = {};
    this._MAP = {};
    this._MODAL = {};
    this._PLAYER = {};
    this._SPRITES = {};
    this._UTILITY = {};
  }

  preload() {
    new ImageLoader( this );
  }

  create() {
    const mapVars = gameConfig.map[gameConfig.loadedScene];

    // create map
    this._MAP = new Map({
      scene: this,
      key: mapVars.key,
      imgKey: mapVars.imgKey,
      tileSetName: mapVars.tileSetName,
      bgLayerName: 'background', // all tilesets have a "background" layer
      blockedLayerName: 'blocked' // similarly, they all have "blocked"
    });

    // world bounds
    this.physics.world.bounds.width = mapVars.mapBounds.width;
    this.physics.world.bounds.height = mapVars.mapBounds.height;

    // based on previous map ( gameConfig.previousData.scene ), determine appropriate x/y value and frame
    const playerCoords = this.setPlayerCoords();
    const playerFrame = this.setPlayerDirection();

    // create Jack
    this._PLAYER = new Player({
      scene: this,
      x: playerCoords.x,
      y: playerCoords.y,
      key: 'jack-standing',
      frame: playerFrame
    });

    // limit camera to size of map
    this.cameras.main.setBounds( 0, 0, mapVars.mapBounds.width, mapVars.mapBounds.height );
    this.cameras.main.startFollow( this._PLAYER ); // camera follows player

    // enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();

    this.createObjectLoader();  // generate items
    this.createEventListeners();  // event listeners

    // handles modal box for tasks and status
    this._UTILITY.boxManager = new BoxManager( this );

    // console.log( this );
  }

  // update loop
  update( time, delta ) {
    // if ( gameConfig.taskMenuOpen ) {
    //   gameConfig.pauseUpdateLoop = true;
    // } else {
    //   gameConfig.pauseUpdateLoop = false;
    // }

    // do walking anims if not paused
    if ( ! gameConfig.pauseUpdateLoop ) {
      this.animation_update_loop();
    }
  }

  // plays animation of passed key
  playAnim( animKey ) {
    if( ! this._PLAYER.anims.isPlaying || this._PLAYER.anims.currentAnim.key !== animKey ) {
      this._PLAYER.anims.play( animKey );
    }
  }

  // animation update loop
  animation_update_loop() {
    if ( this.cursors.down.isDown ) {
      this._PLAYER.body.setVelocityY( gameConfig.playerSpeed );
      this._PLAYER.body.setVelocityX( 0 );
      this._ANIMS.pressedCursor = 'down';
      this.playAnim( 'walking-down' );
    }
    else if ( this.cursors.up.isDown ) {
      this._PLAYER.body.setVelocityY(-gameConfig.playerSpeed );
      this._PLAYER.body.setVelocityX( 0 );
      this._ANIMS.pressedCursor = 'up';
      this.playAnim( 'walking-up' );
    }
    else if ( this.cursors.left.isDown ) {
      this._PLAYER.body.setVelocityX( -gameConfig.playerSpeed );
      this._PLAYER.body.setVelocityY( 0 );
      this._ANIMS.pressedCursor = 'left';
      this.playAnim( 'walking-left' );
    }
    else if ( this.cursors.right.isDown ) {
      this._PLAYER.body.setVelocityX( gameConfig.playerSpeed );
      this._PLAYER.body.setVelocityY( 0 );
      this._ANIMS.pressedCursor = 'right';
      this.playAnim( 'walking-right' );
    }
    else {
      this.stopPlayerAnim();
    }
  }

  // stops animation & velocity on player
  stopPlayerAnim() {
    this._PLAYER.body.setVelocityY( 0 );
    this._PLAYER.body.setVelocityX( 0 );
    this._PLAYER.anims.stop();
  }

  // manages chicken/item generation
  createObjectLoader() {
    this._UTILITY.ObjectLoader = new ObjectLoader( {
      scene: this,
      objectLayers: this._MAP.tilemap.objects
    } );
    this._UTILITY.ObjectLoader.setup();
  }

  createEventListeners() {
    // if SPACE bar is pressed, play stored Action animation
    this.input.keyboard.on( 'keydown_SPACE', () => {
      gameConfig.pauseUpdateLoop = true;
      this.stopPlayerAnim();

      switch( this._ANIMS.pressedCursor ) {
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
          this._PLAYER.setTexture( 'jack-standing', 0 );
      }
    } );

    // on SHIFT, display Animal Status / Active Tasks buttons
    this.input.keyboard.on( 'keydown_SHIFT', () => {
      this._UTILITY.boxManager.createBox( 'tasks' );
    });

    // on ENTER, open dialog box for animals/person/point-of-interest
    this.input.keyboard.on( 'keydown_ENTER', () => {
      this._UTILITY.boxManager.createBox( 'dialog' );
    });

    // ESC closes open dialog box
    this.input.keyboard.on('keydown_ESC', () => {
      this._UTILITY.boxManager.hideBox();
    });

    // restart update loop, if not pressing SPACE or SHIFT or ENTER
    this.input.keyboard.on( 'keydown', function( e ) {
      if ( e.keyCode !== '32'&& e.code !== 'Space'
        && e.keyCode !== '16' && e.code !== 'Shift'
        && e.keyCode !== '13' && e.code !== 'Enter'
      ) {
        gameConfig.pauseUpdateLoop = false;
      }
    }.bind( this ) );

    // on animation complete, sets standing texture
    this._PLAYER.on( 'animationcomplete', ( animation, frame ) => {
      switch( this._ANIMS.pressedCursor ) {
        case 'down':
          this._PLAYER.setTexture( 'jack-standing', 0 );
          break;
        case 'up':
          this._PLAYER.setTexture( 'jack-standing', 1 );
          break;
        case 'left':
          this._PLAYER.setTexture( 'jack-standing', 2 );
          break;
        case 'right':
          this._PLAYER.setTexture( 'jack-standing', 3 );
          break;
        default:
          this._PLAYER.setTexture( 'jack-standing', 0 );
      }
    }, this);

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
    const playerCoords = gameConfig.map[ gameConfig.loadedScene ].playerStartPos;

    if ( prevScene.length > 0 && Object.keys( playerCoords ).length > 1 ) {
      return playerCoords[ prevScene ];
    } else {
      // else, no previous scene exists
      return playerCoords.default;
    }
  }

}
