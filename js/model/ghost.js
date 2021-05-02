/***
 * Represents a ghost in the pacman's game.
 */
class Ghost extends Sprite {
    /**
     * Needs a position, direction and an id to be initialized.
     * Changes the direction of the ghost every n seconds
     * (determinated by GHOST_DIRECTION_CHANGE_INTERVAL)
     * 
     * @param {Position} position Position of the respawn.
     * @param {Direction} direction First direction of the ghost.
     * @param {String} id Id of ghost.
     */
    constructor(position, direction, id) {
        super(position, direction, id);
        this._timer = setInterval(() => {
            this._choiceNewDirection();
            this.notifyIsBlocked();
        }, GHOST_DIRECTION_CHANGE_INTERVAL);
    }
    /**
     * Choses randomly a new direction of the ghosts, then asks to change it.
     */
    _choiceNewDirection() {
        let directions = [Direction.NORTH, Direction.SOUTH, Direction.EAST, Direction.WEST];
        this.askToChangeDirection(directions[Math.floor(Math.random() * directions.length)]);
    }
    /**
     * Checks if the pacman was eated on the previous/current positions of the pacman and the ghost.
     * @param {Pacman} pacman to be verified if he was eated.
     * @returns {Boolean} True if eated, false if not.
     */
    canEat(pacman) {
        return JSON.stringify(pacman._previousPosition) == JSON.stringify(this.position) ||
            JSON.stringify(pacman.position) == JSON.stringify(this._previousPosition) ||
            JSON.stringify(pacman.position) == JSON.stringify(this.position);
    }
    /**
     * If a ghost is blocked, it instantly changes it's direction.
     */
    notifyIsBlocked() {
        this.changeDirection();
    }
}
