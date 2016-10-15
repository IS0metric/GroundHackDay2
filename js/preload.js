var Preload = function(game){};

Preload.prototype = {

	preload: function(){
	this.game.load.image('tile', 'assets/tile.png'); 
    this.game.load.image('player', 'assets/player.png');
	
    game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles-1', 'assets/tiles-1a.png');
	game.load.spritesheet('dude', 'assets/sprite-3.png', 52, 58);
	game.load.image('block', 'assets/block.png');
	game.load.image('block2', 'assets/block2.png');
	game.load.image('block3', 'assets/block3.png');
	game.load.image('background', 'assets/bg3.png');
	game.load.audio('music1', ['assets/audio/music1.mp3', 'assets/audio/music1.ogg']);
	game.load.audio('music2', ['assets/audio/music2.mp3', 'assets/audio/music2.ogg']);
	game.load.audio('music3', ['assets/audio/music3.mp3', 'assets/audio/music3.ogg']);
	game.load.audio('coin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);
	game.load.audio('jump', ['assets/audio/jump.mp3', 'assets/audio/jump.ogg']);
	game.load.audio('explosion', ['assets/audio/explosion.mp3', 'assets/audio/explosion.ogg']);

	},

	create: function(){
		this.game.state.start("Main");
	}
}
