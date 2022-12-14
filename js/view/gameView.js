/**
 * Represents the visual part of the pac man game.
 */
class GameView {
    /**
     * Need the game as parameter to be initialized.
     * @param {Game} game 
     */
    constructor(game, gameCtrl) {
        this._game = game;
        this._gameCtrl = gameCtrl;
        this.createGameBoard();
        this.createPacMan(this._game.maze._pacmanRespawn);
        this.createGhosts(this._game.maze._ghostRespawn);
        this.createLives();
        $(`#lives`).before(`<div id="play"><h1 id="playMessage">PRESS START TO PLAY</h1>
        <button id="playButton">START</button>
        </div>`)
    }
    updateFrame() {
        $(".pacman").css({
            "top": `${TILE_SIZE * this._game.pacman.position.row}px`,
            "left": `${TILE_SIZE * this._game.pacman.position.column}px`
        });
        $("#Blinky").css({
            "top": `${TILE_SIZE * this._game._blinky.position.row}px`,
            "left": `${TILE_SIZE * this._game._blinky.position.column}px`
        });
        $("#Pinky").css({
            "top": `${TILE_SIZE * this._game._pinky.position.row}px`,
            "left": `${TILE_SIZE * this._game._pinky.position.column}px`
        });
        $("#Inky").css({
            "top": `${TILE_SIZE * this._game._inky.position.row}px`,
            "left": `${TILE_SIZE * this._game._inky.position.column}px`
        });
        $("#Clyde").css({
            "top": `${TILE_SIZE * this._game._clyde.position.row}px`,
            "left": `${TILE_SIZE * this._game._clyde.position.column}px`
        });
        this.dotHaveBeenEaten();
        this.updateScore();
        this.displayGameOver();
    }
    createGameBoard() {
        for (let i = 0; i < this._game.maze.nbRows; i++) {
            for (let j = 0; j < this._game.maze.nbColumns; j++) {
                let pos = new Position(i, j);
                if (this._game.maze._wallLayer.hasTile(pos)) {
                    this.createWall(pos);
                }

                if (this._game.maze._dotLayer.hasTile(pos)) {

                    this.createDot(pos, this._game.maze.getDotLayerTile(pos));
                }
            }
        }

    }
    /**
     * Deletes one of the lives of the pacman.
     */
    updateLife() {
        
            $(`.lives`).remove();
            for (let i = 0; i < this._game._pacman.nbLives; i++) {
                $(`#lives`).append(`<span class="lives"></div>`)
            
        }


    }


    /**
    * Vizualizes a wall in the game.
    * @param {Position} pos position to verify the layer.
    */
    createWall(pos) {
        $("#game").append(`<span class='wall' 
        style='top:${TILE_SIZE * pos.row}px; left:${TILE_SIZE * pos.column}px; '></span>`);
    }
    /**
     * Vizualizes a pac dot or a energizer dot depending on it's id and
     * the value of isEnergizer.
     * @param {Position} pos position to verify the layer.
     */
    createDot(pos, tile) {
        if (tile.id == "dot" + pos.row + "-" + pos.column && !tile.isEnergizer) {
            $("#game").append(`<span class='pacdot' id='dot${pos.row}-${pos.column}'
        style='top:${TILE_SIZE * pos.row}px; left:${TILE_SIZE * pos.column}px; '></span>`);
        }
        if (tile.id == "energizer" + pos.row + "-" + pos.column && tile.isEnergizer) {
            $("#game").append(`<span class='energizer' id='energizer${pos.row}-${pos.column}'
            style='top:${TILE_SIZE * pos.row}px; left:${TILE_SIZE * pos.column}px; '></span>`);
        }
    }
    /**
     * Creates the pacman at given position in the parameter.
     * It wil be it's respawn place by default.
     * @param {Position} pos 
     */
    createPacMan(pos) {

        $("#game").append(`<span class="pacman"
             style='top:${TILE_SIZE * pos.row}px;
              left:${TILE_SIZE * pos.column}px; '></span>`)

    }
    /**
     * Creates ghosts inside the maze, all of them are
     * spawned in the same position.
     * @param {Position} pos 
     */
    createGhosts(pos) {
        $("#game").append(`<span id="Blinky"
         style='top:${TILE_SIZE * pos.row}px;
          left:${TILE_SIZE * pos.column}px; '></span>`)
        $("#game").append(`<span id="Pinky"
         style='top:${TILE_SIZE * pos.row}px;
          left:${TILE_SIZE * pos.column}px; '></span>`);
        $("#game").append(`<span id="Inky"
         style='top:${TILE_SIZE * pos.row}px;
          left:${TILE_SIZE * pos.column}px; '></span>`);
        $("#game").append(`<span id="Clyde"
        style='top:${TILE_SIZE * pos.row}px;
         left:${TILE_SIZE * pos.column}px; '></span>`);
    }
    /**
     * Creates n lives of pacman. 
     * PACMAN_LIVES is a const, free to change.
     */
    createLives() {
        for (let i = 0; i < PACMAN_LIVES; i++) {
            $(`#lives`).append(`<span class="lives"></div>`)
        }
    }
    /**
     * Removes the dot that have been eated.
     */
    dotHaveBeenEaten() {
        $(`#${this._game._removedDot.id}`).remove();
    }
    /**
     * Updates current score.
     */
    updateScore() {
        $(`#currentScore`).text(`CURRENT SCORE: ${this._game.score}`)
    }
    /**
     * Displays the current highScore at the start of the game.
     */
    displayGameOver() {
        $(`#highScore`).text(`HIGH SCORE: ${this._game.highScore}`)
    }
    /**
     * Passes to the next level in the maze by creatin a new maze,
     * restarting all position(theirs default spawn places.).
     */
    nextLevel() {
        $(`#game`).remove();
        $(`#lives`).before(`<div id="game"></div>`);
        this.createGameBoard();
        this.createGhosts(this._game.maze._ghostRespawn);
        this.createPacMan(this._game.maze._pacmanRespawn);
    }
    /**
     * Starts a game on user's demand.
     *
     */
    startGame() {
        $(`#play`).hide();
        this._gameCtrl.startHasBeenRequested();

    }
}



