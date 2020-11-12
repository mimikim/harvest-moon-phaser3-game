/**
 * Extends Phaser Sprite class
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 */

import gameConfig from "../config/game-config";

export default class Sprite extends Phaser.GameObjects.Sprite {
    /**
     *
     * @param config : object config obj for Phaser.GameObjects.Sprite
     * @param name : string name identifier for this particular sprite
     * @param creatureType : string sprite type (eg: animal, npc)
     */
    constructor( config, name, creatureType ) {
        super( config.scene, config.x, config.y, config.key, config.frame );
        this.config = config;
        this.scene = config.scene;
        this.name = name;
        this.creatureType = creatureType;
        this.init();
        // console.log(this);
    }

    init() {
        // adding sprite to scene
        this.scene.add.existing( this );

        // add overlap rectangle
        this.overlap = this.scene.add.rectangle(
            this.config.x,
            this.config.y,
            this.width + 20,
            this.height + 20
        );

        // adding physics, these sprites are a dynamic bodies
        this.scene.physics.add.existing( this );
        this.scene.physics.add.existing( this.overlap );

        // adding collision between this Sprite and the Player
        this.scene.physics.add.collider( this, this.scene._PLAYER );

        // set immovable if another object collides with this Sprite
        // otherwise, Sprite will move if the Player runs into it
        this.body.setImmovable( true );

        // fix origin
        // this.setOrigin( 0, 1 );

        // sets animations
        this.setAnimations();

        // sets overlap event for dialog
        this.scene.physics.add.overlap(
            this.overlap,
            this.scene._PLAYER,
            function ( overlap, player ) {
                gameConfig.overlapData.isActive = true;
                gameConfig.overlapData.sprite = this;
                gameConfig.overlapData.overlap = overlap;
                this.overlapCallback( overlap, player, this );
                // console.log('overlapping')
            }.bind( this ),
            false,
            this.scene
        );

        // any additional things here
        this.extra();
    }

    /**
     * Sets animations for this particular Sprite
     */
    setAnimations() {}

    /**
     * Additional actions while overlapping can be put in here
     * @param rect : object overlap rectangle
     * @param player : object Player object
     * @param sprite : object this particular sprite object
     */
    overlapCallback( rect, player, sprite ) {}

    /**
     * Runs on init
     */
    extra() {}

}
