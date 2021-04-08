/**
 * The game is represented as differents layers,
 * 1 will contain every wall, second one every dot.
 */
class Layer {
    /**
     * Creates a 2D array(layer),
     * need number of rows and nb of columns to be created
     * @param {*} nbRows number of rows.
     * @param {*} nbColumns number of columns.
     */
    constructor(nbRows, nbColumns) {
        this._nbRows = nbRows;
        this._nbColumns = nbColumns;
        this._layer = Array(nbRows).fill().map(() => Array(nbColumns));

    }
    /**
     * Verifies if the given position is inside the layer.
     * @param {*} pos position to verify.
     * @returns true if is inside, else false.
     */
    contains(pos) {
        return (pos.row >= 0 && pos.row < this._nbRows
            && pos.column >= 0 && pos.column < this._nbColumns); w
    }
    /**
     * Puts a tile inside the board.
     * @param {*} pos position at which the tile will be put.
     * @param {*} tile tile to put.
     */
    setTile(pos, tile) {
        if (!this.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
            this._layer[pos.row][pos.column] = tile;
    }
    /**
     * Getter of tile in the layer at the given position.
     * @param {*} pos position used to find the tile.
     * @returns the tile.
     */
    getTile(pos) {
        if (!this.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
        return this._layer[pos.row][pos.column];
    }
    /**
     * Verifies if the layer at given position contains a tile.
     * @param {*} pos position in the layer to verify.
     * @returns a boolean, true if it's a tile, else false.
     */
    hasTile(pos) {
        if (!this.contains(pos)) {
            throw "Given position isn't inside the layer";

        }
        return this._layer[pos.row][pos.column] != null;
    }

}