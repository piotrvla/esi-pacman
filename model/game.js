/**
 * Represents the game with all it's elements.
 */
class Game {
    /**
     * Needs rawMaze to initialize the game's maze.
     * @param {*} rawMaze 
     */
    constructor(rawMaze) {
        this._game = new Maze(rawMaze);
    }
    /**
     * Returns the game's maze.
     * @returns the maze.
     */
    get maze() { return this._game; }

}