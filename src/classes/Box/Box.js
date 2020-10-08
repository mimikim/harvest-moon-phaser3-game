/**
 * Creates Graphics game object
 */

export default class Box extends Phaser.GameObjects.Graphics {
  constructor( config ) {
    super( config.scene, config.options );
    this.scene = config.scene;
  }



}
