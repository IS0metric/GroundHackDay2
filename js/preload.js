var Preload = function(game){};

Preload.prototype = {

	preload: function(){
	
	// load in the tiles, picked for each level at random
	game.load.image('tile1', 'assets/tile3.png');
	game.load.image('tile2', 'assets/tile4.png');
	game.load.image('tile3', 'assets/tile5.png');
	game.load.image('tile4', 'assets/tile6.png');
	game.load.image('tile5', 'assets/tile7.png');
	game.load.image('tile6', 'assets/tile8.png');
	
	// load in the octocat sprite
	game.load.spritesheet('player', 'assets/spriteOctocat.png', 52, 58);
	
	// load in the three enemy graphics
	game.load.image('block', 'assets/block.png');
	game.load.image('block2', 'assets/block2.png');
	game.load.image('block3', 'assets/segFaultSimple.png');
	
	// load in the background
	game.load.image('background', 'assets/galaxy.png');
	
	// load in the random music tracks
	game.load.audio('music1', ['assets/audio/music1.mp3', 'assets/audio/music1.ogg']);
	game.load.audio('music2', ['assets/audio/music2.mp3', 'assets/audio/music2.ogg']);
	game.load.audio('music3', ['assets/audio/music3.mp3', 'assets/audio/music3.ogg']);
	game.load.audio('music4', ['assets/audio/music4.mp3', 'assets/audio/music4.ogg']);
	game.load.audio('music5', ['assets/audio/music5.mp3', 'assets/audio/music5.ogg']);
	game.load.audio('music6', ['assets/audio/music6.mp3', 'assets/audio/music6.ogg']);
	game.load.audio('music7', ['assets/audio/music7.mp3', 'assets/audio/music7.ogg']);
	
	// load in the sound effect for adding points
	game.load.audio('coin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);

	},

	create: function(){
		this.game.state.start("Main");
	}
}
