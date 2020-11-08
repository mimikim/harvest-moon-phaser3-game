import Preload from './classes/Preload';
import Game from "./classes/Game";

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 960,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    },
  },
  scene: [
    // Preload,
    Game
  ],
  pixelArt: true,
  roundPixels: true,
};

export default config;
