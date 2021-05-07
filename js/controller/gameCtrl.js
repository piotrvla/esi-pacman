/**
 * Controller of the game components.
 */
class GameCtrl {
    /**
     * Initializes a new game and it's view.
     */
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game, this);
        this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
       
    }
    run() {
        this._timer = setInterval(() => {
            this._game.moveSprites();
            this._view.updateFrame();
            this.isEaten();
            this._view.updateLife();
            this.nextLevel()
        }, RUN_INTERVAL);
    }
    /**
     * Checks if the pacman was declared dead,
     * respawn it, updates it's lives, and also 
     * it's verified if he's dead(no more lifes left).
     */
    isEaten() {
        if (this._game.pacman.isDead) {
            this._game.pacman.respawn();
            this._game._blinky.respawn();
            this._game._pinky.respawn();
            this._game._inky.respawn();
            this._game._clyde.respawn();
            
            if (this._game._pacman.nbLives == 0) {
                console.log("You have no more lives.");
                this._game.saveScore();
                this._view.displayGameOver();
                clearInterval(this._timer);
            }
        }
    }
    /**
     * Verifies if the level have succeed, 
     * if yes new maze is created, and also 
     * position of every sprite is reseted.
     */
    nextLevel(){
        if(this._game.lvlSucceed()){
            this._game.nextLevel();
            this._view.nextLevel();
        }
    }
    /**
     * User has requested a start of the game, then game is started
     * by running run method.
     */
    startHasBeenRequested(){
        this.run();
    }

}