/**
 * Creates Cow, extension of custom Sprite class
 */

import Sprite from '../Sprite';

export default class Cow extends Sprite {

  setAnimations() {
    // cow eating (front)
    if ( ! this.scene.anims.get( 'cow-eating-front' ) ) {
      this.scene.anims.create({
        key: 'cow-eating-front',
        frames: this.scene.anims.generateFrameNames( 'cow-eating-front', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow eating (side)
    if ( ! this.scene.anims.get( 'cow-eating-side' ) ) {
      this.scene.anims.create({
        key: 'cow-eating-side',
        frames: this.scene.anims.generateFrameNames( 'cow-eating-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow happy (side)
    if ( ! this.scene.anims.get( 'cow-happy-side' ) ) {
      this.scene.anims.create({
        key: 'cow-happy-side',
        frames: this.scene.anims.generateFrameNames( 'cow-happy-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow shocked (side)
    if ( ! this.scene.anims.get( 'cow-shocked' ) ) {
      this.scene.anims.create({
        key: 'cow-shocked',
        frames: this.scene.anims.generateFrameNames( 'cow-shocked', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow sleeping (front)
    if ( ! this.scene.anims.get( 'cow-sleeping-front' ) ) {
      this.scene.anims.create({
        key: 'cow-sleeping-front',
        frames: this.scene.anims.generateFrameNames( 'cow-sleeping-front', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow sleeping (side)
    if ( ! this.scene.anims.get( 'cow-sleeping-side' ) ) {
      this.scene.anims.create({
        key: 'cow-sleeping-side',
        frames: this.scene.anims.generateFrameNames( 'cow-sleeping-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }
  }

}
