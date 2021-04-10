/**
 * Controller of the game components.
 */
 class GameCtrl {
    /**
     * Initializes a new game and it's view.
     */
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);
    }
}