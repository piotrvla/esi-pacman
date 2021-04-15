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


    }
    /**
     * Changes the direction of pacman if needed,
     * verifies if the move is allowed then moves the pacman,
     * if it's the case..
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
            if (this._game.canWalkOn(ghost.position.nextPosition(ghost.direction))) {
                ghost.move();
            }
            else {
                ghost.notifyIsBlocked();
            }
            if (ghost.canEat(this.pacman)) {
                console.log("Pacman eated by a ghost");
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
}