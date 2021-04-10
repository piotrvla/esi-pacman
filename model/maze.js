/**
 * Represents the whole maze divided on 2 layers ( walls and dots )
 */
class Maze {
    /**
     * Creates 2 layers, wall layer also dot layer and fill them with their values.
     * Needs rawMaze to be initialized.
     * @param {*} rawMaze the raw maze.
     */
    constructor(rawMaze) {
        this._wallLayer = new Layer(rawMaze.table.length, rawMaze.table[0].length);
        this._dotLayer = new Layer(rawMaze.table.length, rawMaze.table[0].length);
        for (let i = 0; i < rawMaze.table.length; i++) {
            for (let j = 0; j < rawMaze.table[0].length; j++) {
                if (rawMaze.table[i][j] == 1) {
                    this._wallLayer.setTile(new Position(i, j), rawMaze.table[i][j]);
                }
                else if (rawMaze.table[i][j] == 2 || rawMaze.table[i][j] == 3) {
                    this._dotLayer.setTile(new Position(i, j), rawMaze.table[i][j]);
                }
            }
        }

    }
    /**
     * Returns a wall layer's tile at given position.
     * @returns Tile at given position.
     */
    getWallLayerTile(pos) {
        if (!this._wallLayer.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
        return this._wallLayer.getTile(pos);
    }
    /**
     * Returns a dot layer's tile at given position.
     * @returns Tile at given position.
     */
    getDotLayerTile(pos)    {
        if (!this._dotLayer.contains(pos)) {
            throw "Given position isn't inside the layer";
        }
        return this._dotLayer.getTile(pos);
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
}
