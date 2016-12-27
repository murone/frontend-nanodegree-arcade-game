#frontend-nanodegree-arcade-game
==============================================================

##Getting Started
This project has no external dependencies. To play, you should:

1. Clone the project
2. Open index.html in the browser of your choice (tested only for compatability with Chrome)

No webserver is requred to play this game locally.

##How to Play
* Game mechanics are exactly like classic Frogger.
* Only the 4 arrow keys are recognized as valid input. 
* Move your player on the game board with these arrow keys, avoiding enemies (bugs).
* In the event of a collision, you will be presented with a popup. You must click "OK" or hit "Enter" to dismiss before trying again. 
* If you reach the other side, you will be presented with a win dialog. You must dismiss this just like the collision dialog.
* The game will keep track of your wins until you reload the page. each time you reload the page your win count will start at zero again. 

##Making Changes
If you'd like to modify the game functionality, refer to [Frogger Game - Getting Started](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub) from Udacity. This project is based on their game assets and follows their setup outside of the following customizations:

* Initial positions and speeds of enemies are defined in the initPos prototype of Enemy. 
* The difficulty property in the Enemy class is a multiplier influencing the speed. You can adjust this variable to make enemies move faster or slower. 
* If you would like to change the player starting position, you can do so in the Player class using the startX and startY properties. Multiples of 101 in the x direction and 83 in the y direction will best center your player in blocks on the gameboard. 
* If you would like to change how far an arrow key moves a player (not recommended) you can modify the mx and my properties of Player. 
* I've set up a grid system tracking row and column of the player. It's currently unused, but can be accessed for additional functionality by using row and column properties of Player

##Contributing
This project was completed for a Udacity training course and as such, will not be maintained. Any pull requests will likely be ignored and this repo may disappear at any time. Any changes should be maintained in your own fork of the project. 
 
 
   

==============================================================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
