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
    this.loadAssets();
  }

  // adds buttons to game
  loadAssets() {
    this.setAsset({
      name: 'statusBtn', // name of var
      key: 'btn-status', // key of image to add
      x: 167, // x position
      y: 232, // y position
      cb: this.loadStatusBox // function to run on pointerdown event
    });

    this.setAsset({
      name: 'statusBtnInactive',
      key: 'btn-status-inactive',
      x: 167,
      y: 232,
      cb: this.loadStatusBox
    });

    this.setAsset({
      name: 'taskBtn',
      key: 'btn-tasks',
      x: 500,
      y: 232,
      cb: this.loadTaskBox
    });

    this.setAsset({
      name: 'taskBtnInactive',
      key: 'btn-tasks-inactive',
      x: 500,
      y: 232,
      cb: this.loadTaskBox
    });

    this.dialogBox = new ModalBox( this.scene );
  }

  /**
   * helper function for adding assets, adds image, sets event listener
   * @param config : object config options for
   */
  setAsset( config ) {
    this.scene[config.name] = this.scene.add.image( config.x, config.y, config.key )
      .setScrollFactor( 0 )
      .setInteractive( { useHandCursor: true  } )
      .setVisible( false );

    this.scene[config.name].on( 'pointerdown', () => {
      config.cb( this );
    });
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

  // loads buttons to view Tasks or Status, by default see Status first
  loadButtons() {
    // this.dialogBox.hideBox();
    this.loadStatusBox( this );
    this.scene.statusBtn.setVisible( true );
    this.scene.taskBtnInactive.setVisible( true );
  }

  /**
   * Task box with list of active tasks to complete
   * @param instance : this class instance, since we are calling this func in setAsset()
   */
  loadTaskBox( instance ) {
    instance.scene.statusBtn.setVisible( false );
    instance.scene.statusBtnInactive.setVisible( true );

    instance.scene.taskBtnInactive.setVisible( false );
    instance.scene.taskBtn.setVisible( true );

    instance.dialogBox.loadBox( 'list of all active tasks' );
  }

  /**
   * Status box with date info & animal status
   * @param instance : this class instance, since we are calling this func in setAsset()
   */
  loadStatusBox( instance ) {
    instance.scene.taskBtn.setVisible( false );
    instance.scene.taskBtnInactive.setVisible( true );

    instance.scene.statusBtnInactive.setVisible( false );
    instance.scene.statusBtn.setVisible( true );

    // assemble current day and animal status info
    const text = `Day: ${gameConfig.day}<br>Animal Status`;

    instance.dialogBox.loadBox( text );
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
