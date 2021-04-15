/**
 * Represents the whole maze divided on 2 layers ( walls and dots )
 */
class Maze {
    /**
     * Creates 2 layers, wall layer also dot layer and fill them with their values.
     * Needs rawMaze to be initialized.
     * @param {rawMaze} rawMaze the raw maze.
     */
    constructor(rawMaze) {
        this._wallLayer = new Layer(rawMaze.table.length, rawMaze.table[0].length);
        this._dotLayer = new Layer(rawMaze.table.length, rawMaze.table[0].length);
        for (let i = 0; i < rawMaze.table.length; i++) {
            for (let j = 0; j < rawMaze.table[0].length; j++) {
                if (rawMaze.table[i][j] == 1) {
                    this._wallLayer.setTile(new Position(i, j), new Wall("wall"));
                }
                else if (rawMaze.table[i][j] == 2) {
                    this._dotLayer.setTile(new Position(i, j), new Dot("dot", false));
                }
                else if (rawMaze.table[i][j] == 3) {
                    this._dotLayer.setTile(new Position(i, j), new Dot("energizer", true));
                }
                else if (rawMaze.table[i][j] == 4) {
                    this._pacmanRespawn = new Position(i, j);
                }
                else if (rawMaze.table[i][j] == 5){
                    this._ghostRespawn = new Position(i,j);
                }

            }
        }

    }
    /**
     * Returns a wall layer's tile at given position.
     * @param {Position} Position Position to retrieve the tile from the maze.
     * @returns {Tile} Tile at given position.
     */
    getWallLayerTile(pos) {
        if (!this._wallLayer.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
        return this._wallLayer.getTile(pos);
    }
    /**
     * Returns a dot layer's tile at given position.
     * @param {Position}
     * @returns {Tile} Tile at given position.
     */
    getDotLayerTile(pos) {
        if (!this._dotLayer.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
        return this._dotLayer.getTile(pos);
    }
    /**
     * Verifies if the spirit can walk
     * on the given position in the game or not.
     * @param {Position} position Position to check
     * @returns {Boolean} True if can walk on, false if not.
     */
    canWalkOn(position) {
        if ( !this._wallLayer.hasTile(position) && this._dotLayer.contains(position)) {
            return (true);
        }
        return false;

    }
    /**
     * Verifies if the dot can be pick at the given position.
     * @param {Position} position Position to check.
     * @returns {Boolean} True if can be picked, false if not.
     */
    canPick(position) {
        if (this._dotLayer.hasTile(position) && !this._wallLayer.hasTile(position)) {
            return true;
        }
        return false;
    }
    /**
     * Pickes the tile at the given position.
     * @param {Position} position 
     * @returns {Tile} Tile at the given position.
     */
    pick(position) {
        if (this.canPick(position)) {
            return this.getDotLayerTile(position);
        }
        throw "Nothing to pick";
    }
    /**
     * We suppose that two layers are are of the same size,
     * then one of them is used to get the number of rows.
     * @returns number of rows of the layer.
     */
    get nbRows() { return this._dotLayer._nbRows; }
    /**
    * We suppose that two layers are are of the same size,
    * then one of them is used to get the number of columns.
    * @returns number of columns of the layer.
    */
    get nbColumns() { return this._dotLayer._nbColumns; }
    get pacmanRespawn() { return this._pacmanRespawn; }
}
