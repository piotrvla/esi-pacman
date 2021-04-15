/**
 * The powerful, the pleasurable, the indestructible Pacman.
 */
class Pacman extends Sprite {
    /**
     * 
     * @param {Position} position the initial position 
     * @param {Direction} direction the initial direction
     */
    constructor(position, direction) {
        super(position, direction, PACMAN_ID);
        this._nbLives = PACMAN_LIVES;
    }
    /**
     * Returns the number of lives. 
     * @returns {Number} number of lives.
     */
    get nbLives() { return this._nbLives; }
    hasBeenEaten() {
        this._nbLives--;
        this._isDead = true;
    }
}