var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
	
	var me = this;
	me.game.stage.backgroundColor = '479cde';
	bg = game.add.tileSprite(0, 0, 1920, 1080, 'background');
    bg.fixedToCamera = true;
	
	text = game.add.text(0, 0, "Get in cyber space go there do it - The Game TITLE", style);
	},

	startGame: function(){
		this.game.state.start("Main");
	}

}