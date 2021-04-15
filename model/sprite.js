/**
 * Represents a sprite, a moving element in the game.
 */
class Sprite extends Component {
    /**
     * Needs position, direction and an id to be initialized.
     * @param {Position} position Position of the sprite.
     * @param {Direction} direction Position in which the sprite is moving.
     * @param {String} id ID of the game's component.
     */
    constructor(position, direction, id) {
        super(id);
        this._position = position;
        this._direction = direction;
        this._previousPosition;
        this._askedToChangeDirection = false;
        this._askedDirection;
    }
    /**
     * @returns {Position}
     */
    get position() { return this._position; }
    /**
     * @returns {Position}
     */
    get direction() { return this._direction; }
    /**
     * Moves the spirit in the given direction.
     */
    move() {
        this._position = this._position.nextPosition(this._direction);
    }
    /**
     * Used to let the game know that, 
     * the spirit is changing it's direction.
     * @param {Direction} direction Direction to change.
     */
    askToChangeDirection(direction) {
        this._askedToChangeDirection = true;
        this._askedDirection = direction;
    }
    /**
     * Changes the direction only if the user have asked
     * for the changement.
     */
    changeDirection() {
        if (this._askedToChangeDirection) {
            this._previousPosition = this.direction;
            this._direction = this._askedDirection;
            this._askedToChangeDirection = false;
        }
    }
    notifyIsBlocked() {
        console.log("elo");
    }


}