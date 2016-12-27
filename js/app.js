// Enemies our player must avoid
var Enemy = function() {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	
	//Speed multiplier
	this.difficulty = 3; 

	// Initialize bug potision
	this.initPos();
	
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.initPos = function() {
	this.x = -101; // Set the enemy off screen left
	this.y = 60 + Math.floor(Math.random() * 3) * 83; // Pick a random lane
	this.speed = Math.random() + .75; // Set a random speed
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.

	// Reinitializes the bug if it is off screen.
	if (this.x > 588){
		this.initPos();
		return;
	}

	// Define objects for collision checking
	var eneRect = {x: this.x, y: this.y, width: 70, height: 50};
	var playerRect = {x: player.x, y: player.y, width: 70, height: 50};

	// Standard 2D Collision algorithm 
	if (eneRect.x < playerRect.x + playerRect.width &&
	eneRect.x + eneRect.width > playerRect.x &&
	eneRect.y < playerRect.y + playerRect.height &&
	eneRect.height + eneRect.y > playerRect.y) {
		player.reset("You died! Try again.");
	}

	this.x += dt * this.speed * this.difficulty * 101;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
	// Constants for movement
	this.mx = 101;
	this.my = 83;
	this.maxX = 404
	this.minX = 0
	this.maxY = 404
	this.minY = -11

	//Constants for position
	this.startX = 202
	this.startY = 404
	this.x = this.startX;
	this.y = this.startY;

	this.column = this.x / this.mx + 1;
	this.row = (this.y + 11) / this.my + 1;
	this.sprite = 'images/char-boy.png';
};

// Update player position 
Player.prototype.update = function(x,y) {
	if(x) this.x += x;
	if(y) this.y += y;

	this.column = this.x / 101 + 1;
	this.row = (this.y + 11) / 83 + 1;

	if (this.row == 1) {
		wins += 1;
		if (wins > 1){
			setTimeout(this.reset("You won! You have " + wins + " wins this session."), 5000)
		} else {
			setTimeout(this.reset("You won! You have " + wins + " win this session."), 5000)
		}
	};
}

// Reset the player to the bottom middle block. Called with an argument to be displayed in a popup upon reset. 
Player.prototype.reset = function(msg) {
	window.alert(msg);
	this.x = player.startX;
	this.y = player.startY;
}    

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Calculate the correct movement of the player based on input and pass that value to the update function. Leverages constants defined in the player class to avoid hardcoding values into this function
Player.prototype.handleInput = function(key) {

	//Case statement chooses appropriate move logic based on which key is pressed
	switch(key){
		case 'up':
			
			// Make sure player is not already off the top of the game board
			if (this.y > this.minY){
				// For UP, move 'my' pixels in the negative direction on the y dimension
				this.update(0, -this.my);
			} else if (this.y < this.minY){
				// Resets player to the topmost dimension if up is pressed and someone forced the player into off-screen territory in this direction
				this.y = this.minY;
			}
			break;
		case 'down':

			// Make sure player is not already off the down of the game board
			if (this.y < this.maxY){
				// For DOWN, move 'my' pixels in the positive direction on the y dimension
				this.update(0, this.my);
			} else if (this.y > this.maxY){
				// Resets player to the topmost dimension if up is pressed and someone forced the player into off-screen territory in this direction
				this.y = this.maxY;
			}
			break;
		case 'left':
			
			// Make sure player is not already off the left of the game board
			if (this.x > this.minX){
				// For LEFT, move 'mx' pixels in the negative direction on the x dimension
				this.update( -this.mx,0);
			} else if (this.x < this.minX){
				// Resets player to the topmost dimension if up is pressed and someone forced the player into off-screen territory in this direction
				this.x = this.minX;
			}
			break;
		case 'right':
			
			// Make sure player is not already off the right of the game board
			if (this.x < this.maxX){
				// For RIGHT, move 'mx' pixels in the positive direction on the x dimension
				this.update(this.mx,0);
			} else if (this.x > this.maxX){
				// Resets player to the topmost dimension if up is pressed and someone forced the player into off-screen territory in this direction
				this.x = this.maxX;
			}
			break;
		default:
			break;
	}
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [new Enemy(),new Enemy(), new Enemy()];
var player = new Player();
var wins = 0;
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
