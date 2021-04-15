/**
 * Represents a direction of game's spirit.
 */
class Direction{
    
    /**
     * Need a row and a column to initialize a direction.
     * @param {number} deltaRow Row of the direction.
     * @param {number} deltaColumn Column of the direction.
     */
    constructor(deltaRow,deltaColumn){
        this._deltaRow=deltaRow;
        this._deltaColumn = deltaColumn;
     
        
    }
    /**
     * Returns the row.
     * @returns {number}
     */
    get deltaRow(){return this._deltaRow;}
    /**
     * Returns the column.
     * @returns {number}
     */
    get deltaColumn(){return this._deltaColumn;}
  


      
 
    }
    //North direction that goes 1 case up.
    Direction.NORTH= new Direction(-1,0);
    //South direction that goes 1 case down.
    Direction.SOUTH = new Direction(1,0);
    //West direction that goes 1 case right.
    Direction.WEST = new Direction(0,-1);
    //East direction that goes 1 case left.
    Direction.EAST = new Direction(0,1);

  

