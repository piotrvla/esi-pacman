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
        this._score=0;
      

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

        if(this._game.canPick(this._pacman.position)){
            this._removedDot = this._game.pick(this._pacman.position);
            if(this._removedDot.isEnergizer){
                this._score+=100;
            }
            else{
                this._score+=10;
            }
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
     * 
     */
    get score(){return this._score;}
    /**
     * 
     */
    get removedDot(){return this._removedDot;}
}
