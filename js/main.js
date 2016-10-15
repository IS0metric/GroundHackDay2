var Main = function(game){

};

Main.prototype = {
	

	
	create: function() {
	
	var me = this;
	//The spacing for the initial platforms
	me.spacing = 500;
 

    //Get the dimensions of the tile we are using
    me.tileWidth = me.game.cache.getImage('tile').width;
    me.tileHeight = me.game.cache.getImage('tile').height;
	


 
 
    //Set the background colour to blue
    me.game.stage.backgroundColor = '479cde';
	bg = game.add.tileSprite(0, 0, 1920, 1080, 'background');
    bg.fixedToCamera = true;
 
    //Enable the Arcade physics system
    me.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    //Add a platforms group to hold all of our tiles, and create a bunch of them
    me.platforms = me.game.add.group();
    me.platforms.enableBody = true;
    me.platforms.createMultiple(250, 'tile');
    
    me.timer = game.time.events.loop(6000, me.addPlatform, me);
	me.timer = game.time.events.loop(5000, me.addBlocks, me);
	
	//Create the inital on screen platforms
	me.initPlatforms();
	
	//Add the player to the screen
	me.createPlayer();
	
	me.cursors = me.game.input.keyboard.createCursorKeys();
	
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    text = game.add.text(0, 0, "Get in cyber space go there do it - The Game", style);


	//Create the score variable
	me.score = 0;
	 
	//Create the score label
	me.createScore();

	
	blocks = game.add.group(); // BLOCKS

	blocks.enableBody = true;
	
	blocks2 = game.add.group(); // BLOCKS 2

	blocks2.enableBody = true;
	
	blocks3 = game.add.group(); // BLOCKS 3

	blocks3.enableBody = true;
	
	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
    };  
	
	var number;
	var music1;
	var music2;
	var music3;
	var music4;
	var music5;
	var music6;
	var music7;
	
	number = random(1,7);

	music1 = game.add.audio('music1');
	music2 = game.add.audio('music2');
	music3 = game.add.audio('music3');
	music4 = game.add.audio('music4');
	music5 = game.add.audio('music5');
	music6 = game.add.audio('music6');
	music7 = game.add.audio('music7');
	

	switch(number){
		case 1:
			music1.play();
			break;
		case 2:
			music2.play();
			break;
		case 3:
			music3.play();
			break;
		case 4:
			music4.play();
			break;
		case 5:
			music5.play();
			break;
		case 6:
			music6.play();
			break;
		case 7:
			music7.play();
			break;
		default:
			music1.play();
}
 
  },

	update: function() {
 
    var me = this;

    //Make the sprite collide with the ground layer
    me.game.physics.arcade.collide(me.player, me.platforms);
	game.physics.arcade.collide(blocks, me.platforms);
	game.physics.arcade.collide(blocks2, me.platforms);
	game.physics.arcade.collide(blocks3, me.platforms);
	game.physics.arcade.overlap(me.player, blocks, hitBlock, null, this);
	game.physics.arcade.overlap(blocks2, me.player, hitBlock2, null, this);
	game.physics.arcade.overlap(me.player, blocks3, hitBlock3, null, this);
	
	
	function hitBlock(block) {
		block.kill();
		game.sound.stopAll();
		me.gameOver();
		
	}
	function hitBlock2(block2) {
		block2.kill();
		game.sound.stopAll(); 
		me.gameOver();
	}
	function hitBlock3(block3) {
		block3.kill();
		game.sound.stopAll(); 
		me.gameOver();
	}

 
    //Check if the player is touching the bottom
    if(me.player.body.position.y >= me.game.world.height - me.player.body.height){
		game.sound.stopAll();
        me.gameOver();
    }
	
	
	//Make the player go left
	if(me.cursors.left.isDown){
	  me.player.animations.play('left');
		me.player.body.velocity.x = -400;
	} else if (me.cursors.right.isDown){
	me.player.animations.play('right');
		me.player.body.velocity.x = 400;
	} else if (me.cursors.up.isDown) {
	me.player.animations.play('turn');
		me.player.body.velocity.y = -400;
	} else if (me.cursors.down.isDown) {
	me.player.animations.play('turn');
		me.player.body.velocity.y = 400;
	} else{
	me.player.animations.play('turn');
		me.player.body.velocity.x = 0;
		me.player.body.velocity.y = 0;
	}
 
	},
	

	gameOver: function(){
		var me = this;
		this.game.state.start('GameOver');
	},

	
	addTile: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile = me.platforms.getFirstDead();
 
    //Reset it to the specified coordinates
    tile.reset(x, y);
    tile.body.velocity.y = 150; 
    tile.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile.checkWorldBounds = true;
    tile.outOfBoundsKill = true;    
  },
 
 addPlatform: function(y){
 
    var me = this;
 
    //If no y position is supplied, render it just outside of the screen
    if(typeof(y) == "undefined"){
      y = -me.tileHeight;
	  //increase score
	  me.incrementScore();
    }
 
    //Work out how many tiles we need to fit across the whole screen
    var tilesNeeded = Math.ceil(me.game.world.width / me.tileWidth);
 
    //Add a hole randomly somewhere
    var hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
 
    //Keep creating tiles next to each other until we have an entire row
    //Don't add tiles where the random hole is
    for (var i = 0; i < tilesNeeded; i++){
      if (i != hole && i != hole + 1){
        this.addTile(i * me.tileWidth, y); 
      }           
    }
  },
 
addBlocks: function(){
	for (var i = 0; i < 6; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block = blocks.create(i * (Math.random()*300), 0, 'block');

		//  Let gravity do its thing
		block.body.gravity.y = 500 *Math.random();
		
		//collision
		block.body.collideWorldBounds = false;

		//  This just gives each block a slightly random bounce value 0.8 + Math.random() * 0.2;
		block.body.bounce.y = 1;	
	

	}
		
	for (var i = 0; i < 6; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block2 = blocks2.create(i * (Math.random()*300) , 0, 'block2');

		//  Let gravity do its thing
		block2.body.gravity.y = 500 *Math.random();
		
		//collision
		block2.body.collideWorldBounds = false;

		//  This just gives each block a slightly random bounce value 0.8 + Math.random() * 0.2;
		block2.body.bounce.y = 1;

	}
		
	//  Here we'll create 7 of them evenly spaced apart
	for (var i = 0; i < 4; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block3 = blocks3.create(i * ( Math.random()*300), 0, 'block3');

		//  Let gravity do its thing
		block3.body.gravity.y = 500 *Math.random();
		
		//collision
		block3.body.collideWorldBounds = false;

		//  This just gives each block a slightly random bounce value 0.8 + Math.random() * 0.2;
		block3.body.bounce.y = 1;	
	

	}
},
 
	
initPlatforms: function(){
 
    var me = this,
        bottom = me.game.world.height - me.tileHeight,
        top = me.tileHeight;
 
    //Keep creating platforms until they reach (near) the top of the screen
    for(var y = bottom; y > top - me.tileHeight; y = y - me.spacing){
        me.addPlatform(y);
    }
 
},

createPlayer: function(){
 
    var me = this;
 
    //Add the player to the game by creating a new sprite
    me.player = me.game.add.sprite(me.game.world.centerX, me.game.world.height - (me.spacing * 2 + (3 * me.tileHeight)), 'player');
    
    me.player.animations.add('left', [0, 1, 2], 2, true);
    me.player.animations.add('turn', [3, 4, 5], 1, true);
    me.player.animations.add('right', [6, 7, 8], 2, true);
 
    //Set the players anchor point to be in the middle horizontally
    me.player.anchor.setTo(0.5, 1.0);
 
    //Enable physics on the player
    me.game.physics.arcade.enable(me.player);
 
    //Make the player fall by applying gravity
    me.player.body.gravity.y = 0;
 
    //Make the player collide with the game boundaries 
    me.player.body.collideWorldBounds = true;
 
 
},
 
createScore: function(){
 
    var me = this;
 
    var scoreFont = "100px Arial";
 
    me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "0", {font: scoreFont, fill: "#fff"}); 
    me.scoreLabel.anchor.setTo(0.5, 0.5);
    me.scoreLabel.align = 'center';
 
},

 
incrementScore: function(){
 
    var me = this;
 
    me.score += 1;   
    me.scoreLabel.text = me.score;    
	
	var coin;
	coin = game.add.audio('coin');
	coin.play();	
 
},


};
