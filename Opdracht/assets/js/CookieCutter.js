var CookieCutter = function(size, hasChocolateChips){
	this.size				= size;
	this.hasChocolateChips	= hasChocolateChips;
	
	this.addChocolateChips = function(hasChocolateChips){
		this.hasChocolateChips = true;
	}
	this.removeChocolateChips = function(hasChocolateChips){
		this.hasChocolateChips = false;
	}
};