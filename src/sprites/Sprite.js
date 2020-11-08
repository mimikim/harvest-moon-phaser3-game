/**
 * Extends Phaser Sprite class
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 */

export default class Sprite extends Phaser.GameObjects.Sprite {
    /**
     *
     * @param config : object config obj for Phaser.GameObjects.Sprite
     * @param name : string name identifier for this particular sprite
     */
    constructor( config, name ) {
        super(config.scene, config.x, config.y, config.key, config.frame);

        this.scene = config.scene;
        this.name = name;
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

    setAnimations() {}

}
