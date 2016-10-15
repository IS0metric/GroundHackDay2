var GameOver = function(game){};

GameOver.prototype = {
	init: function(score){
	alert("You Lose!");
	this.game.state.start("Main");
	},

  	create: function(){

	},

	restartGame: function(){
		this.game.state.start("Main");
	}
	
}