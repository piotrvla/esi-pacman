/**
 * 
 */
 class GameCtrl {
    /**
     * 
     */
    constructor() {
        this._game = new Game(RAW_MAZE);
        this._view = new GameView(this._game);
    }
}