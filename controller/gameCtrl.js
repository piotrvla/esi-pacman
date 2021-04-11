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
        this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
        this._pacmanView = new PacmanView(this._pacmanCtrl);
        this.run();
    }
    run() {
        this._timer = setInterval(() => {
        this._game.moveSprites();      
        this._view.updateFrame();
        }, RUN_INTERVAL);
    }
}