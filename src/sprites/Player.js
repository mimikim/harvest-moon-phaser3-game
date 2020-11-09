/**
 * Creates Player, extension of the Sprite Game Object class
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 *
 * - animations
 * - set world collisions (world bounds, blockedLayer collision)
 */

export default class Player extends Phaser.GameObjects.Sprite {

  constructor( config ) {
    // super is the constructor inside the class we are extending, ie: Sprite
    super( config.scene, config.x, config.y, config.key, config.frame );

    this.scene = config.scene;
    this.init();
  }

  // init player
  init() {
    // adding sprite to scene
    this.scene.add.existing( this );

    // adding physics, this sprite is a dynamic body
    this.scene.physics.add.existing( this );

    // restrain player to game bounds, so cannot go off screen
    this.body.setCollideWorldBounds( true );

    this.body.allowGravity = false;

    // setting animations for jack
    this.setAnimations();

    // adding collision between player and tiled Blocked layer
    this.scene.physics.add.collider( this, this.scene._MAP.blockedLayer );

    // restrain player to game bounds, so cannot go off screen
    this.body.setCollideWorldBounds( true );
  }

  // creating Jack animations
  // animation keys are defined inside the Background class, when loading the spritesheets
  setAnimations() {
    // when player is walking down
    if ( ! this.scene.anims.get( 'walking-down' ) ) {
      this.scene.anims.create( {
        key: 'walking-down',
        frames: this.scene.anims.generateFrameNames( 'jack-walking', {
          frames: [ 0, 1 ]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      } );
    }

    // walking upward
    if ( ! this.scene.anims.get( 'walking-up' ) ) {
      this.scene.anims.create( {
        key: 'walking-up',
        frames: this.scene.anims.generateFrameNames( 'jack-walking', {
          frames: [ 2, 3 ]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      } );
    }

    // walking left
    if ( ! this.scene.anims.get( 'walking-left' ) ) {
      this.scene.anims.create( {
        key: 'walking-left',
        frames: this.scene.anims.generateFrameNames( 'jack-walking', {
          frames: [ 4, 5 ]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      } );
    }

    // walking right
    if ( ! this.scene.anims.get( 'walking-right' ) ) {
      this.scene.anims.create( {
        key: 'walking-right',
        frames: this.scene.anims.generateFrameNames( 'jack-walking', {
          frames: [ 6, 7 ]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      } );
    }

    // creating ring cowbell animation keys
    const cowbells = [
      'ring-cowbell-down',
      'ring-cowbell-up',
      'ring-cowbell-left',
      'ring-cowbell-right'
    ];

    for( let i = 0; i < cowbells.length; i++ ) {
      let spritesheetKey = 'jack-'.concat( cowbells[i] );

      if ( ! this.scene.anims.get( cowbells[i] ) ) {
        this.scene.anims.create( {
          key: cowbells[i],
          frames: this.scene.anims.generateFrameNames( spritesheetKey, {
            frames: [ 0, 1, 2, 3, 4, 5 ]
          }),
          frameRate: 4,
          yoyo: false,
          repeat: 0,
        } );
      }
    }
  }

}
