/**
 * Represents the game with all it's elements.
 */
class Game {
    /**
     * Needs rawMaze to initialize the game's maze.
     * @param {rawMaze} rawMaze 
     */
    constructor(rawMaze) {
        this._game = new Maze(rawMaze);
        this._pacman = new Pacman(this._game.pacmanRespawn, Direction.WEST);
        this._blinky = new Ghost(this._game._ghostRespawn, Direction.NORTH, "Blinky");
        this._pinky = new Ghost(this._game._ghostRespawn, Direction.SOUTH, "Pinky");
        this._inky = new Ghost(this._game._ghostRespawn, Direction.EAST, "Inky");
        this._clyde = new Ghost(this._game._ghostRespawn, Direction.WEST, "Clyde")
        this._ghosts = [this._blinky, this._pinky, this._inky, this._clyde];
        this._score = 0;
        this._highScore = localStorage.getItem("highscore");
        this._isHighScoreInitialized();


    }
    /**
     * Verifies if highscore contains any value, if not
     * it's initialised at 0.
     */
    _isHighScoreInitialized() {
        if (!this._highScore) {
            this._highScore = 0;
        }
    }
    /**
     * Verifies the next position of the pacman is correct, if not the pacman continues it's path.
     * It's same for the ghost, it continues it's path if no obstacles, otherwise
     * the ghost is blocked, it must instantly change it's direction.
     * 
     */
    moveSprites() {
        if (this._pacman._askedToChangeDirection && this._game.canWalkOn(this._pacman.position.nextPosition(this._pacman._askedDirection))) {
            this.pacman.changeDirection();
            this._pacman.move();
        }
        else if (this._game.canWalkOn(this._pacman.position.nextPosition(this._pacman.direction))) {
            this._pacman.move();
        }
        for (let ghost of this._ghosts) {
            if (ghost._askedToChangeDirection && this._game.canWalkOn(ghost.position.nextPosition(ghost._askedDirection))) {
                ghost.notifyIsBlocked();
                ghost.move();
            }
            else if (this._game.canWalkOn(ghost.position.nextPosition(ghost.direction))) {
                ghost.move();
            }
            else {
                ghost._choiceNewDirection();
            }
            if (ghost.canEat(this.pacman)) {
                this._pacman.hasBeenEaten();
            }
        }

        if (this._game.canPick(this._pacman.position)) {
            this._removedDot = this._game.pick(this._pacman.position);
            if (this._removedDot.isEnergizer) {
                this._score += 100;
            }
            else {
                this._score += 10;
            }
        }
    }
    /**
     * Saves the highscore if the score 
     * is bigger than the current highScore
     */
    saveScore(){
        if(this._highScore<this._score){
            this._highScore=this._score;
            localStorage.setItem("highscore",`${this._highScore}`)
           
        }
    }
    /**
     * Verifies if there's any dot left, if not the current level has ended.
     * @returns {Boolean}
     */
    lvlSucceed(){
        return this._game.isEmpty();
    }
    /**
     * New maze is created, pacman is respawned,
     * and also ghosts are respawned.
     */
    nextLevel(){
        this._game = new Maze(RAW_MAZE);
        this._pacman.respawn();
        for(let ghost of this._ghosts){
            ghost.respawn();
        }
    }
    /**
     * Returns the game's maze.
     * @returns {Maze} The maze.
     */
    get maze() { return this._game; }
    /**
     * Returns the Pacman.
     * @returns {Pacman} The pacman.
     */
    get pacman() { return this._pacman; }
    /**
     * Returns current score
     * @returns {Number}
     */
    get score() { return this._score; }
    /**
     * Returns removed tile.
     * @returns {Tile}
     */
    get removedDot() { return this._removedDot; }
    /**
     * Returns current high score
     * @returns {Number}
     */
    get highScore() { return this._highScore; }
}
