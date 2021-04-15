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
        this._pacman = new Pacman((this._game.pacmanRespawn), Direction.WEST);
    }
    /**
     * Changes the direction of pacman if needed,
     * verifies if the move is allowed then moves the pacman,
     * if it's the case..
     */
    moveSprites() {
        this.pacman.changeDirection();
        if(this._game.canWalkOn(this._pacman.position.nextPosition(this._pacman.direction))){
        this._pacman.move();
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