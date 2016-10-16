var Main = function(game){

};

Main.prototype = {
	

	
	create: function() {
	
	var me = this;
	//The spacing for the initial platforms
	me.spacing = 500;
 

    //Get the dimensions of the tiles
    me.tileWidth = me.game.cache.getImage('tile1').width;
    me.tileHeight = me.game.cache.getImage('tile1').height;
	


 
 
    //Set the background colour, background image and camera
    me.game.stage.backgroundColor = '479cde';
	bg = game.add.tileSprite(0, 0, 1920, 1080, 'background');
    bg.fixedToCamera = true;
 
    //Enable the Arcade physics system
    me.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    //Add a platforms group to hold all of our tiles, and create a bunch of them, each group different colour
    me.platforms = me.game.add.group();
    me.platforms.enableBody = true;
    me.platforms.createMultiple(250, 'tile1');
	
	me.platforms2 = me.game.add.group();
    me.platforms2.enableBody = true;
    me.platforms2.createMultiple(250, 'tile2');
	
	me.platforms3 = me.game.add.group();
    me.platforms3.enableBody = true;
    me.platforms3.createMultiple(250, 'tile3');
	
	me.platforms4 = me.game.add.group();
    me.platforms4.enableBody = true;
    me.platforms4.createMultiple(250, 'tile4');
	
	me.platforms5 = me.game.add.group();
    me.platforms5.enableBody = true;
    me.platforms5.createMultiple(250, 'tile5');
	
	me.platforms6 = me.game.add.group();
    me.platforms6.enableBody = true;
    me.platforms6.createMultiple(250, 'tile6');
    
	//Spawn platforms every 6 seconds, spawn enemies every 2.5 seconds
    me.timer = game.time.events.loop(6000, me.addPlatformx, me);
	me.timer = game.time.events.loop(2500, me.addBlocks, me);
	
	//Create the inital on screen platforms
	me.initPlatforms();
	
	//Add the player to the screen
	me.createPlayer();
	
	//cursor create
	me.cursors = me.game.input.keyboard.createCursorKeys();
	
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100 Game title
    text = game.add.text(0, 0, "Get in cyber space go there do it - The Game", style);


	//Create the score variable
	me.score = 0;
	 
	//Create the score label
	me.createScore();

	
	blocks = game.add.group(); // BLOCKS add to group

	blocks.enableBody = true;
	
	blocks2 = game.add.group(); // BLOCKS 2 add to group

	blocks2.enableBody = true;
	
	blocks3 = game.add.group(); // BLOCKS 3 add to group

	blocks3.enableBody = true;
	
	//random function for generation
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
	
	//pick a number between 1 and 7 to select music track
	number = random(1,7);

	music1 = game.add.audio('music1');
	music2 = game.add.audio('music2');
	music3 = game.add.audio('music3');
	music4 = game.add.audio('music4');
	music5 = game.add.audio('music5');
	music6 = game.add.audio('music6');
	music7 = game.add.audio('music7');
	
	//randomize track
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

    //Collision statements
    me.game.physics.arcade.collide(me.player, me.platforms);
	me.game.physics.arcade.collide(me.player, me.platforms2);
	me.game.physics.arcade.collide(me.player, me.platforms3);
	me.game.physics.arcade.collide(me.player, me.platforms4);
	me.game.physics.arcade.collide(me.player, me.platforms5);
	me.game.physics.arcade.collide(me.player, me.platforms6);
	game.physics.arcade.collide(blocks, me.platforms);
	game.physics.arcade.collide(blocks2, me.platforms);
	game.physics.arcade.collide(blocks3, me.platforms);
	game.physics.arcade.collide(blocks, me.platforms2);
	game.physics.arcade.collide(blocks2, me.platforms2);
	game.physics.arcade.collide(blocks3, me.platforms2);
	game.physics.arcade.collide(blocks, me.platforms3);
	game.physics.arcade.collide(blocks2, me.platforms3);
	game.physics.arcade.collide(blocks3, me.platforms3);
	game.physics.arcade.collide(blocks, me.platforms4);
	game.physics.arcade.collide(blocks2, me.platforms4);
	game.physics.arcade.collide(blocks3, me.platforms4);
	game.physics.arcade.collide(blocks, me.platforms5);
	game.physics.arcade.collide(blocks2, me.platforms5);
	game.physics.arcade.collide(blocks3, me.platforms5);
	game.physics.arcade.collide(blocks, me.platforms6);
	game.physics.arcade.collide(blocks2, me.platforms6);
	game.physics.arcade.collide(blocks3, me.platforms6);
	game.physics.arcade.overlap(me.player, blocks, hitBlock, null, this);
	game.physics.arcade.overlap(blocks2, me.player, hitBlock2, null, this);
	game.physics.arcade.overlap(me.player, blocks3, hitBlock3, null, this);
	
	
	//Gameover handling for block collision
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

 
    //Check if the player is touching the bottom, also gameover
    if(me.player.body.position.y >= me.game.world.height - me.player.body.height){
		game.sound.stopAll();
        me.gameOver();
    }
	
	
	//Make the player go left, right, up, down
	if(me.cursors.left.isDown){
	  me.player.animations.play('left');
		me.player.body.velocity.x = -600;
	} else if (me.cursors.right.isDown){
	me.player.animations.play('right');
		me.player.body.velocity.x = 600;
	} else if (me.cursors.up.isDown) {
	me.player.animations.play('turn');
		me.player.body.velocity.y = -600;
	} else if (me.cursors.down.isDown) {
	me.player.animations.play('turn');
		me.player.body.velocity.y = 600;
	} else{
	me.player.animations.play('turn');
		me.player.body.velocity.x = 0;
		me.player.body.velocity.y = 0;
	}
 
	},
	
	//Gameover
	gameOver: function(){
		var me = this;
		this.game.state.start('GameOver');
	},

	
	//functions for adding tiles, one for each colour
	addTile1: function(x, y){
 
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
  
  	addTile2: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile2 = me.platforms2.getFirstDead();
 
    //Reset it to the specified coordinates
    tile2.reset(x, y);
    tile2.body.velocity.y = 150; 
    tile2.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile2.checkWorldBounds = true;
    tile2.outOfBoundsKill = true;    
  },
  
  	addTile3: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile3 = me.platforms3.getFirstDead();
 
    //Reset it to the specified coordinates
    tile3.reset(x, y);
    tile3.body.velocity.y = 150; 
    tile3.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile3.checkWorldBounds = true;
    tile3.outOfBoundsKill = true;    
  },
  
  	addTile4: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile4 = me.platforms4.getFirstDead();
 
    //Reset it to the specified coordinates
    tile4.reset(x, y);
    tile4.body.velocity.y = 150; 
    tile4.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile4.checkWorldBounds = true;
    tile4.outOfBoundsKill = true;    
  },
  
  
  	addTile5: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile5 = me.platforms5.getFirstDead();
 
    //Reset it to the specified coordinates
    tile5.reset(x, y);
    tile5.body.velocity.y = 150; 
    tile5.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile5.checkWorldBounds = true;
    tile5.outOfBoundsKill = true;    
  },
  
  
  	addTile6: function(x, y){
 
    var me = this;
 
    //Get a tile that is not currently on screen
    var tile6 = me.platforms6.getFirstDead();
 
    //Reset it to the specified coordinates
    tile6.reset(x, y);
    tile6.body.velocity.y = 150; 
    tile6.body.immovable = true;
 
    //When the tile leaves the screen, kill it
    tile6.checkWorldBounds = true;
    tile6.outOfBoundsKill = true;    
  },
 
//function to randomize platform colour, randomnly call one of colour platform functions 
addPlatformx: function(y){ 
	var me = this;
	var numberx;
	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
    };  
	numberx = random(1,6);
	switch(numberx){
		case 1:
			me.addPlatform();
			break;
		case 2:
			me.addPlatform2();
			break;
		case 3:
			me.addPlatform3();
			break;
		case 4:
			me.addPlatform4();
			break;
		case 5:
			me.addPlatform5();
			break;
		case 6:
			me.addPlatform6();
			break;
		default:
			me.addPlatform();
}
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
			this.addTile1(i * me.tileWidth, y); 
		  }           
		}
	  },
	  
	  
	 addPlatform2: function(y){
	 
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
			this.addTile2(i * me.tileWidth, y); 
		  }           
		}
	  },
	  
	 addPlatform3: function(y){
 
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
		this.addTile3(i * me.tileWidth, y); 
	  }           
	}
  },
  
	 addPlatform4: function(y){
	 
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
			this.addTile4(i * me.tileWidth, y); 
		  }           
		}
	  },
	  
	 addPlatform5: function(y){
 
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
		this.addTile5(i * me.tileWidth, y); 
	  }           
	}
  },
  
  	 addPlatform6: function(y){
	 
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
			this.addTile6(i * me.tileWidth, y); 
		  }           
		}
	  },
	  
addBlocks: function(){
	
	//404 errors
	for (var i = 0; i < 5; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block = blocks.create(i * (Math.random()*2000), 0, 'block');

		//  gravity of block
		block.body.gravity.y = 200 + 400 *Math.random();
		
		//collision
		block.body.collideWorldBounds = false;

		//  This just gives each block a slightly random bounce value 0.8 + Math.random() * 0.2;
		block.body.bounce.y = 1;	
	

	}
	
	//Bug blocks	
	for (var i = 0; i < 5; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block2 = blocks2.create(i * (Math.random()*2000) , 0, 'block2');

		//  gravity of block
		block2.body.gravity.y = 200 + 400 *Math.random();
		
		//collision
		block2.body.collideWorldBounds = false;

		//  This just gives each block a slightly random bounce value 0.8 + Math.random() * 0.2;
		block2.body.bounce.y = 1;

	}
		
	//Seg fault blocks
	for (var i = 0; i < 4; i++)
	{
		//  Create a block inside of the 'blocks' group
		var block3 = blocks3.create(i * ( Math.random()*2000), 0, 'block3');

		//  gravity of block
		block3.body.gravity.y = 200 + 400 *Math.random();
		
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
//create score display
createScore: function(){
 
    var me = this;
 
    var scoreFont = "100px Arial";
 
    me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "0", {font: scoreFont, fill: "#fff"}); 
    me.scoreLabel.anchor.setTo(0.5, 0.5);
    me.scoreLabel.align = 'center';
 
},

 //function to add 1 to score, called when platforms created.
incrementScore: function(){
 
    var me = this;
 
    me.score += 1;   
    me.scoreLabel.text = me.score;    
	
	var coin;
	coin = game.add.audio('coin');
	coin.play();	
 
},


};
