/**
 * manages Task and Dialog boxes
 */

import ModalBox from './ModalBox';
import allTasks from '../../config/tasks';
import dialogAnimals from '../../config/dialog-animal';
import dialogNPCs from '../../config/dialog-npc';
import config from "../../config";
import gameConfig from "../../config/game-config";

export default class BoxManager {
  constructor( scene ) {
    this.scene = scene;
    this.btns = this.scene._BTNS;
    this.loadAssets();
  }

  // adds buttons to game
  loadAssets() {
    this.setAsset({
      name: 'statusBtn', // name of var
      key: 'btn-status', // key of image to add
      x: 167, // x position
      y: config.height - 468,
      cb: this.loadStatusBox // function to run on pointerdown event
    });

    this.setAsset({
      name: 'statusBtnInactive',
      key: 'btn-status-inactive',
      x: 167,
      y: config.height - 468,
      cb: this.loadStatusBox
    });

    this.setAsset({
      name: 'taskBtn',
      key: 'btn-tasks',
      x: 500,
      y: config.height - 468,
      cb: this.loadTaskBox
    });

    this.setAsset({
      name: 'taskBtnInactive',
      key: 'btn-tasks-inactive',
      x: 500,
      y: config.height - 468,
      cb: this.loadTaskBox
    });

    this.dialogBox = new ModalBox( this.scene );
  }

  /**
   * helper function for adding assets, adds image, sets event listener
   * @param config : object config options for
   */
  setAsset( config ) {
    this.btns[config.name] = this.scene.add.image( config.x, config.y, config.key )
      .setScrollFactor( 0 )
      .setInteractive( { useHandCursor: true  } )
      .setVisible( false );

    this.btns[config.name].on( 'pointerdown', () => {
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

    // determine who Player is speaking to
    const targetSprite = gameConfig.overlapData.sprite;
    const type = targetSprite.creatureType;
    const name = targetSprite.name;
    let text;
    console.log(targetSprite);
    console.log(type);

    // animal or npc dialog
    switch( type ) {
      case 'animal': {
        let options = dialogAnimals[name].default;

        // append additional dialog options, if found lil babby
        if ( gameConfig.foundBabyCow ) {
          options.push( ... dialogAnimals[name].additional );
        }

        text = this.randomIndex( options );
        break;
      }

      case 'npc': {
        break;
      }

      case 'interactive': {
          // if sign, display msg

        break;
      }
    }

    this.dialogBox.loadBox( text );
  }

  // grabs random index from array
  randomIndex( arr ) {
    return arr[Math.floor( Math.random() * arr.length )];
  }

  // loads buttons to view Tasks or Status, by default see Status first
  loadButtons() {
    // this.dialogBox.hideBox();
    this.loadStatusBox( this );
    this.btns.statusBtn.setVisible( true );
    this.btns.taskBtnInactive.setVisible( true );
  }

  /**
   * Task box with list of active tasks to complete
   * @param instance : this class instance, since we are calling this func in setAsset()
   */
  loadTaskBox( instance ) {
    instance.btns.statusBtn.setVisible( false );
    instance.btns.statusBtnInactive.setVisible( true );

    instance.btns.taskBtnInactive.setVisible( false );
    instance.btns.taskBtn.setVisible( true );

    instance.dialogBox.loadBox( 'list of all active tasks' );
  }

  /**
   * Status box with date info & animal status
   * @param instance : this class instance, since we are calling this func in setAsset()
   */
  loadStatusBox( instance ) {
    instance.btns.taskBtn.setVisible( false );
    instance.btns.taskBtnInactive.setVisible( true );

    instance.btns.statusBtnInactive.setVisible( false );
    instance.btns.statusBtn.setVisible( true );

    // assemble current day and animal status info
    const text = `Day: ${gameConfig.day}<br>Animal Status`;

    instance.dialogBox.loadBox( text );
  }

  // hides tasks buttons
  hideBtns() {
    this.btns.statusBtn.setVisible( false );
    this.btns.taskBtn.setVisible( false );
    this.btns.taskBtnInactive.setVisible( false );
    this.btns.statusBtnInactive.setVisible( false );
  }

  // hides created Boxes
  hideBox() {
    this.hideBtns();
    this.dialogBox.hideBox();
    gameConfig.taskMenuOpen = false;
  }

}
