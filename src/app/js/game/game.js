var game = new Phaser.Game(640, 360, phaser.AUTO, 'gameArea');

var GameState = {
  preload: function(){

  },
  create: function(){

  },
  update: function(){

  }
};

game.state.add('GameState', GameState);

game.state.start('GameState');
