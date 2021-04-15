/** 
* Position used to localisate a component of the game.
*/
class Position{
    /**
     * To be created need a row and a column.
     * @param {number} row row of the position in the game.
     * @param {number} column column of the position in the game.
     */
    constructor(row, column){
        this._row=row;
        this._column=column;
    }
    /**
     * Returns the row of the position.
     * @returns {number}
     */
    get row(){return this._row;}
    /**
     * Returns the column of the position.
     * @returns {number}
     */
    get column(){return this._column;}
    /**
     * Returns the next position of the spirit with the given direction .
     * @param {Direction} dir Direction of the spirit.
     * @returns Next position in the given direction.
     */
    nextPosition(dir){
        return new Position(this._row + dir.deltaRow, this._column + dir.deltaColumn);
    }
}