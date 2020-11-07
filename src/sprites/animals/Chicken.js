/**
 * Creates Chicken, extension of the Sprite Game Object class
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 */

export default class Chicken extends Phaser.GameObjects.Sprite {
  constructor( config ) {
    super( config.scene, config.x, config.y, config.key, config.frame );

    this.scene = config.scene;
    this.init();
  }

  init() {
    // adding sprite to scene
    this.scene.add.existing( this );

    // adding physics, this sprite is a dynamic body
    this.scene.physics.add.existing( this );

    // adding collision between this Sprite and the Player
    this.scene.physics.add.collider( this, this.scene._PLAYER );

    // set immovable if another object collides with this Sprite
    // otherwise, Sprite will move if the Player runs into it
    this.body.setImmovable( true );

    // fix origin
    this.setOrigin( 0, 1 );

    // sets animations
    this.setAnimations();
  }

  setAnimations() {
    // walking front
    if ( ! this.scene.anims.get( 'chicken-walking-front' ) ) {
      this.scene.anims.create({
        key: 'chicken-walking-front',
        frames: this.scene.anims.generateFrameNames( 'chicken-walking', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // walking back
    if ( ! this.scene.anims.get( 'chicken-walking-back' ) ) {
      this.scene.anims.create({
        key: 'chicken-walking-bacl',
        frames: this.scene.anims.generateFrameNames( 'chicken-walking', {
          frames: [2, 3]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // walking side
    if ( ! this.scene.anims.get( 'chicken-walking-side' ) ) {
      this.scene.anims.create({
        key: 'chicken-walking-side',
        frames: this.scene.anims.generateFrameNames( 'chicken-walking', {
          frames: [4, 5]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // sleeping
    if ( ! this.scene.anims.get( 'chicken-sleeping' ) ) {
      this.scene.anims.create({
        key: 'chicken-sleeping',
        frames: this.scene.anims.generateFrameNames( 'chicken-sleeping', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

  }
}
