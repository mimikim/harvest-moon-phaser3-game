/**
 * Creates Chicken, extension of custom Sprite class
 */

import Sprite from '../Sprite';

export default class Chicken extends Sprite {

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
