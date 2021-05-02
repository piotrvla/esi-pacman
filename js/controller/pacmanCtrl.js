/**
 * Controller of the pacman.
 */
class PacmanCtrl {
    /**
     * Needs a Pacman to be initialized.
     * @param {Pacman} pacman 
     */
    constructor(pacman){
        this._pacman = pacman;
    }
    /**
     * Used to let the game know that, 
     * the spirit is changing it's direction.
     * @param {Direction} direction Direction to change.
     */
    askToChangeDirection(direction){
        this._pacman.askToChangeDirection(direction);
    }
}

