/**
 * Modal Box, returns list of Tasks/Animal Status OR dialog box
 */

import config from '../config';
import gameConfig from '../config/game-config';
import tasks from '../config/tasks';
import dialogAnimals from '../config/dialog-animals';
import dialogNPCs from '../config/dialog-npc';

export default class DialogBox {
  constructor( scene, type ) {
    this.scene = scene;

    // box settings
    this.boxConfig = {
      height: 300,
      width: config.width - 40,
      x: 20,
      y: ( config.height - 320 ),
      fill: 0xFFFFFF,
      alpha: 0.8
    };

    // passed TYPE determines what kind of box to open,

    if ( type === 'dialog' || type === 'tasks' ) {
      gameConfig.taskMenuOpen = true;
    }

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
        width: 5,
        color: 0x000000,
        alpha: 1,
      }
    } ).setScrollFactor( 0 );

    // box that will be a mask for the text
    this.scene.maskBox = this.scene.add.graphics( {
      fillStyle: {
        color: 0x000000,
        alpha: 1,
      }
    } ).setScrollFactor( 0 );

    // creating interactable elements
    this.createCloseBtn();
    this.createScrollBtn();
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

    // grab text for box
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Praesent semper feugiat nibh sed pulvinar proin gravida. Facilisis sed odio morbi quis commodo odio aenean sed. Id eu nisl nunc mi ipsum. Est ullamcorper eget nulla facilisi etiam. Potenti nullam ac tortor vitae purus faucibus. Aenean pharetra magna ac placerat vestibulum. At urna condimentum mattis pellentesque id. Purus gravida quis blandit turpis cursus in hac. Dui vivamus arcu felis bibendum. Facilisi morbi tempus iaculis urna id. Nisl tincidunt eget nullam non nisi est sit amet facilisis.Dui vivamus arcu felis bibendum. Facilisi morbi tempus iaculis urna id. Nisl tincidunt eget nullam non nisi est sit amet facilisis.";

    this.addText( text );

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

  createScrollBtn() {
    this.scene.scrollBtn = this.scene.add.image( config.width - 50, config.height - 45, 'scroll-btn' ).setScrollFactor( 0 );
    this.scene.scrollBtn.setInteractive( { useHandCursor: true  } ).setVisible( false );

    this.scene.scrollBtn.on('pointerdown', function (pointer) {
      console.log( 'clicked' );
      console.log( pointer );
    });
  }

  addText( text ) {
    this.scene.textbox = this.scene.make.text({
      x: this.boxConfig.x,
      y: this.boxConfig.y,
      text: text,
      style: {
        font: '25px monospace',
        fill: '#000000',
        padding: { x: 20, y: 15 },
        wordWrap: { width: 700 }
      }
    }).setScrollFactor( 0 ).setVisible( false );

    // create a mask on the box, will only show text
    this.scene.mask = this.scene.textbox.createBitmapMask();
    this.scene.maskBox.setMask( this.scene.mask );
  }

  // displays popup box
  loadBox() {
    this.scene.box.setVisible( true );
    this.scene.maskBox.setVisible( true );
    this.scene.closeBtn.setVisible( true );
    this.scene.scrollBtn.setVisible( true );
  }

  // hides box
  hideBox() {
    this.scene.box.setVisible( false );
    this.scene.maskBox.setVisible( false );
    this.scene.closeBtn.setVisible( false );
    this.scene.scrollBtn.setVisible( false );
  }

  // update text in box
  updateText() {}

  // creates tabs, each of which
  createTabs() {}

}
