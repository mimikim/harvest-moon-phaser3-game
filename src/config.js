import Game from "./classes/Game";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    },
  },
  scene: [
    Game
  ],
  pixelArt: true,
  roundPixels: true,
};

export default config;
