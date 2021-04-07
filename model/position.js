/** 
* Position used to localisate a component of the game.
*/
class Position{
    /**
     * To be created need a row and a column.
     * @param {*} row row of the position in the game.
     * @param {*} column column of the position in the game.
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

}