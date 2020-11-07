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
    this.scene.statusBtn = this.scene.add.image( 167, 232, 'btn-status' ).setScrollFactor( 0 );
    this.scene.statusBtn.setInteractive( { useHandCursor: true  } )
                  .setVisible( false );

    this.scene.taskBtn = this.scene.add.image( 500, 232, 'btn-tasks' ).setScrollFactor( 0 );
    this.scene.taskBtn.setInteractive( { useHandCursor: true  } )
                .setVisible( false );

    this.scene.statusBtn.on( 'pointerdown', () => {
      this.loadStatusBox();
    });

    this.scene.taskBtn.on( 'pointerdown', () => {
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

  // Dialog box grabs dialog object,
  loadDialogBox() {
    this.hideBtns();

    console.log('creating dialog box');
    // determine who Player is speaking to

    // grab text object
    let text = "I spotted a cave elf sneaking a peak at us! I think they like cows... :)";

    this.dialogBox.loadBox( text );
  }

  // loads buttons to view Tasks or Status
  loadButtons() {
    // this.dialogBox.hideBox();
    this.dialogBox.loadBox( 'Check your tasks and status' );
    this.scene.statusBtn.setVisible( true );
    this.scene.taskBtn.setVisible( true );
  }

  // Task box with 3 tabs
  loadTaskBox() {
    console.log('task box');
    this.dialogBox.loadBox( 'list of all active tasks' );
  }

  // Status box with date info & animal status
  loadStatusBox() {
    // check if Player is near anyone

    // assemble current day and animal status info
    console.log('show status');
    this.dialogBox.loadBox( 'animal status and what day it is' );
  }

  hideBtns() {
    this.scene.statusBtn.setVisible( false );
    this.scene.taskBtn.setVisible( false );
  }

  // hides created Boxes
  hideBox() {
    this.hideBtns();
    this.dialogBox.hideBox();
    gameConfig.taskMenuOpen = false;
  }

}
