/**
 * Intro screen before the game loads
 * Gives brief overview of how to play
 */
import Phaser from "phaser";
import config from "../config"

export default class Preload extends Phaser.Scene {
    constructor() {
        super( 'Preload' );
    }

    init() {}

    preload() {
        this.cameras.main.backgroundColor.setTo( 0,0,0 );
        this.load.image( 'text-harvestmoon', 'images/items/misc/text-harvestmoon.png' );
        this.load.image( 'text-phaser3', 'images/items/misc/text-phaser3.png' );
        this.load.image( 'text-mimikim', 'images/items/misc/text-mimikim.png' );
        this.load.image( 'cow-face', 'images/animals/cow/cow-face.png' );
    }

    create() {
        this.add.image( config.width / 2, 100, 'text-harvestmoon' )
            .setOrigin( 0.5 );

        this.add.image( config.width / 2, 180, 'text-phaser3' )
            .setOrigin( 0.5 );

        this.add.image( config.width / 2, config.height - 100, 'text-mimikim' )
            .setOrigin( 0.5 );

        this.add.image( config.width / 2, config.height / 2, 'cow-face' )
            .setOrigin( 0.5 )
            .setScale( 2 );

        this.add.text( config.width / 2, config.height / 2 + 150, 'Press ENTER to begin!', { font: '60px monospace' } )
            .setOrigin( 0.5 );

        // on ENTER, load Game scene
        this.input.keyboard.on( 'keydown_ENTER', () => {
            this.scene.start( 'Game' );
        });
    }

    update() {}

}
