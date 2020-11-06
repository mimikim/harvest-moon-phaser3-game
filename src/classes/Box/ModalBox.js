/**
 * displays Modal Box
 */

import config from '../../config';
import gameConfig from '../../config/game-config';

export default class ModalBox {
  constructor( scene ) {
    this.scene = scene;

    // box settings
    this.boxConfig = {
      height: 300,
      width: config.width - 40,
      x: 20,
      y: ( config.height - 320 ),
      fill: 0x000000,
      alpha: 0.7
    };

    this.createBox();
  }

  createBox() {
    // creating graphics
    // this box will be the rounded menu box
    this.scene.box = this.scene.add.graphics( {
      fillStyle: {
        color: this.boxConfig.fill,
        alpha: this.boxConfig.alpha,
      },
      lineStyle: {
        width: 6,
        color: 0xFFFFFF,
        alpha: 1,
      }
    } ).setScrollFactor( 0 );

    // box that will be a mask for the text
    this.scene.maskBox = this.scene.add.graphics( {
      fillStyle: {
        color: 0xFFFFFF,
        alpha: 1,
      }
    } ).setScrollFactor( 0 );

    // creating interactable elements
    this.createCloseBtn();
    this.createTabs();

    // adding graphic to rounded rectangle
    this.scene.box.fillRoundedRect(
      this.boxConfig.x,
      this.boxConfig.y,
      this.boxConfig.width,
      this.boxConfig.height,
      0
    );

    // stroke for rounded rectangle
    this.scene.box.strokeRoundedRect(
      this.boxConfig.x,
      this.boxConfig.y,
      this.boxConfig.width,
      this.boxConfig.height,
      0
    );

    // rectangle for text mask
    this.scene.maskBox.fillRoundedRect(
      this.boxConfig.x,
      this.boxConfig.y,
      this.boxConfig.width,
      this.boxConfig.height - 40,
      0
    );

    // hide on game load
    this.hideBox();
  }

  // creating Close button
  createCloseBtn() {
    this.scene.closeBtn = this.scene.add.image( config.width - 50, config.height - 290, 'close-btn' ).setScrollFactor( 0 );
    this.scene.closeBtn.setInteractive( { useHandCursor: true  } );

    this.scene.closeBtn.on('pointerdown', function (pointer) {
      gameConfig.taskMenuOpen = false;
      this.hideBox();
    }.bind( this ));
  }

  addText( text ) {
    this.scene.textbox = this.scene.make.text({
      x: this.boxConfig.x,
      y: this.boxConfig.y,
      text: text,
      style: {
        font: '25px monospace',
        fill: '#FFFFFF',
        padding: { x: 20, y: 15 },
        wordWrap: { width: 700 }
      }
    }).setScrollFactor( 0 ).setVisible( false );

    // create a mask on the box, will only show text
    this.scene.mask = this.scene.textbox.createBitmapMask();
    this.scene.maskBox.setMask( this.scene.mask );
  }

  // displays popup box
  loadBox( text ) {
    this.addText( text );

    this.scene.box.setVisible( true );
    this.scene.maskBox.setVisible( true );
    this.scene.closeBtn.setVisible( true );
  }

  // hides box
  hideBox() {
    this.scene.box.setVisible( false );
    this.scene.maskBox.setVisible( false );
    this.scene.closeBtn.setVisible( false );
  }

  // update text in box
  updateText() {}

  // creates tabs, each of which
  createTabs() {}

}
