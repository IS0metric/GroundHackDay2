var Boot = function(game){

};
  
Boot.prototype = {

	preload: function(){

	},
	
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		// upon starting, preloads the game's assets
		this.game.state.start("Preload");
	}
}
