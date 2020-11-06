/**
 * manages Task and Dialog boxes
 */

import ModalBox from './ModalBox';
import allTasks from '../../config/tasks';
import dialogAnimals from '../../config/dialog-animals';
import dialogNPCs from '../../config/dialog-npc';
import config from "../../config";
import gameConfig from "../../config/game-config";

export default class BoxManager {
  constructor( scene ) {
    this.scene = scene;
    this.setAssets();
  }

  // adds buttons to game
  setAssets() {
    const btnX = 200;
    const btnY = config.height - 100;

    this.statusBtn = this.scene.add.image( btnX, btnY, 'btn-status' ).setScrollFactor( 0 );
    this.statusBtn.setInteractive( { useHandCursor: true  } )
                  .setVisible( false );

    this.taskBtn = this.scene.add.image( config.width - btnX, btnY, 'btn-tasks' ).setScrollFactor( 0 );
    this.taskBtn.setInteractive( { useHandCursor: true  } )
                .setVisible( false );

    this.statusBtn.on( 'pointerdown', () => {
      this.loadStatusBox();
    });

    this.taskBtn.on( 'pointerdown', () => {
      this.loadTaskBox();
    });

    this.dialogBox = new ModalBox( this.scene );

  }

  /**
   * Creates modal box based on passed type
   * @param type : string what type
   */
  createBox( type ) {
    this.type = type;

    if ( this.type !== 'dialog' && this.type !== 'tasks' ) {
      return;
    }

    // set gameConfig prop
    gameConfig.taskMenuOpen = true;

    switch( this.type) {
      case 'dialog':
        this.loadDialogBox();
        break;
      case 'tasks':
        this.loadButtons();
        break;
    }
  }

  // loads buttons to view Tasks or Status
  loadButtons() {
    this.dialogBox.hideBox();
    this.statusBtn.setVisible( true );
    this.taskBtn.setVisible( true );
  }

  // Task box with 3 tabs
  loadTaskBox() {
    console.log('task box')
  }

  // Status box with date info & animal status
  loadStatusBox() {
    // check if Player is near anyone

    // assemble current day and animal status info
    console.log('show status');
  }

  hideBtns() {
    this.statusBtn.setVisible( false );
    this.taskBtn.setVisible( false );
  }

  // Dialog box grabs dialog object,
  loadDialogBox() {
    this.hideBtns();

    console.log('creating dialog box');
    // determine who Player is speaking to

    // grab text object
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Praesent semper feugiat nibh sed pulvinar proin gravida. Facilisis sed odio morbi quis commodo odio aenean sed. Id eu nisl nunc mi ipsum. Est ullamcorper eget nulla facilisi etiam. Potenti nullam ac tortor vitae purus faucibus. Aenean pharetra magna ac placerat vestibulum. At urna condimentum mattis pellentesque id. Purus gravida quis blandit turpis cursus in hac. Dui vivamus arcu felis bibendum. Facilisi morbi tempus iaculis urna id. Nisl tincidunt eget nullam non nisi est sit amet facilisis.Dui vivamus arcu felis bibendum. Facilisi morbi tempus iaculis urna id. Nisl tincidunt eget nullam non nisi est sit amet facilisis.";

    this.dialogBox.loadBox( text );
  }

  // hides created Boxes
  hideBox() {
    this.hideBtns();
    this.dialogBox.hideBox();
    gameConfig.taskMenuOpen = false;
  }

}
