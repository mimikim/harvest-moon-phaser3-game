/**
 * manages Task and Dialog boxes
 */

import Box from '../../classes/Box/Box';
import tasks from '../../config/tasks';
import dialogAnimals from '../../config/dialog-animals';
import dialogNPCs from '../../config/dialog-npc';
import config from "../../config";
import gameConfig from "../../config/game-config";

export default class BoxManager {
  /**
   * On load, define what type of Box we are making
   * @param scene : scene
   * @param type : string type of Box to load
   */
  constructor( scene, type ) {
    this.scene = scene;
    this.type = type;
    this.config = {
      height: 300,
      width: config.width - 40,
      x: 20,
      y: ( config.height - 320 ),
      fill: 0xFFFFFF,
      alpha: 0.8 // opacity
    }

    // set gameConfig prop
    if ( type === 'dialog' || type === 'tasks' ) {
      gameConfig.taskMenuOpen = true;

      // create new Graphic
      this.scene.box = new Box( this.scene, this.config );
      this.scene.box.setScrollFactor(0);

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
    }

    if ( type === 'dialog' ) {
      this.loadDialogBox();
    } else if ( type === 'tasks' ) {
      this.loadTaskBox();
    }
  }

  // Dialog box grabs dialog object,
  loadDialogBox() {

  }

  // Task box grab Tasks, and creates 3 separate boxes
  loadTaskBox() {

  }

}
