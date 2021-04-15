class Ghost extends Sprite {
    constructor(position, direction, id) {
        super(position, direction, id);
        this._timer = setInterval(() => {
            this._direction = this._choiceNewDirection();
        }, GHOST_DIRECTION_CHANGE_INTERVAL);
    }
    _choiceNewDirection() {
        let directions = [Direction.NORTH, Direction.SOUTH, Direction.EAST, Direction.WEST];
        return this._direction = directions[Math.floor(Math.random() * directions.length)];
    }
    canEat(pacman) {
        return JSON.stringify(pacman._previousPosition) == JSON.stringify(this.position) ||
            JSON.stringify(pacman.position) == JSON.stringify(this._previousPosition) ||
            JSON.stringify(pacman.position) == JSON.stringify(this.position);
    }
    notifyIsBlocked() {
       
            this.askToChangeDirection(this._choiceNewDirection());
           
            this.changeDirection();
            
        
    }
}