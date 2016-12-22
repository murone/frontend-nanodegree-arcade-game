// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.difficulty = 3; //speed multiplier
    this.x = -101;
    this.y = 60 + Math.floor(Math.random() * 3) * 83;
    this.speed = Math.random() + .75;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 505){
        this.x = -101
        this.y = 60 + Math.floor(Math.random() * 3) * 83;
        this.speed = Math.random() + .75;
        return;
    }
    var eneRect = {x: this.x, y: this.y, width: 70, height: 50};
    var playerRect = {x: player.x, y: player.y, width: 70, height: 50};
    if (eneRect.x < playerRect.x + playerRect.width &&
    eneRect.x + eneRect.width > playerRect.x &&
    eneRect.y < playerRect.y + playerRect.height &&
    eneRect.height + eneRect.y > playerRect.y) {
        player.reset("You died! Try again.");
    }
    // if (eneRect.x < playerRect.x + playerRect.width &&
    // eneRect.x + eneRect.width > playerRect.x &&
    // eneRect.y < playerRect.y + playerRect.height &&
    // eneRect.height + eneRect.y > playerRect.y) {
    //     player.reset();
    // }

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
    //constants for movement
    this.mx = 101;
    this.my = 83;
    this.maxX = 404
    this.minX = 0
    this.maxY = 404
    this.minY = -11

    this.startX = 202
    this.startY = 404

    //variables for position and appearance
    this.x = this.startX;
    this.y = this.startY;

    this.column = this.x / 101 + 1;
    this.row = (this.y + 11) / 83 + 1;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(x,y) {
    if(x) this.x += x;
    if(y) this.y += y;

    this.column = this.x / 101 + 1;
    this.row = (this.y + 11) / 83 + 1;

    if (this.row == 1) {setTimeout(this.reset("You won!"), 5000)};
}

Player.prototype.reset = function(msg) {
    window.alert(msg);
    this.x = player.startX;
    this.y = player.startY;
}    

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
    switch(key){
        case 'up':

            if (this.y > this.minY){
                // Up = -my on y
                this.update(0, -this.my);
            } else if (this.y < this.minY){
                this.y = this.minY;
            }
            break;
        case 'down':

            if (this.y < this.maxY){
                // Down = +my on y
                this.update(0, this.my);
            } else if (this.y > this.maxY){
                this.y = this.maxY;
            }
            break;
        case 'left':
            if (this.x > this.minX){
                // Left = -mx on x
                this.update( -this.mx,0);
            } else if (this.x < this.minX){
                this.x = this.minX;
            }
            break;
        case 'right':
            if (this.x < this.maxX){
                // Right = +mx on x
                this.update(this.mx,0);
            } else if (this.x > this.maxX){
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

// var numEne = 2 + Math.floor(Math.random() * 3) + 1;
// var allEnemies = new Array(numEne);
// for (let enemy of allEnemies){
//     enemy = new Enemy();
// }

var allEnemies = [new Enemy(),new Enemy(), new Enemy()];
var player = new Player();

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
