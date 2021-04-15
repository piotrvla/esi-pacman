/**
 * Represents the visual part of the pac man game.
 */
class GameView {
    /**
     * Need the game as parameter to be initialized.
     * @param {Game} game 
     */
    constructor(game) {
        this._game = game;
        for (let i = 0; i < this._game.maze.nbRows; i++) {
            for (let j = 0; j < this._game.maze.nbColumns; j++) {
                let pos = new Position(i, j);
                if (this._game.maze._wallLayer.hasTile(pos)) {
                    this.createWall(pos);
                }

                if (this._game.maze._dotLayer.hasTile(pos)) {
                    pos
                    this.createDot(pos, this._game.maze.getDotLayerTile(pos));
                }
            }
        }
        this.createPacMan(this._game.maze._pacmanRespawn);
        this.createGhosts(this._game.maze._ghostRespawn);
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
        if (tile.id == "dot" && !tile.isEnergizer) {
            $("#game").append(`<span class='pacdot' 
        style='top:${TILE_SIZE * pos.row}px; left:${TILE_SIZE * pos.column}px; '></span>`);
        }
        if (tile.id == "energizer" && tile.isEnergizer == true) {
            $("#game").append(`<span class='energizer' 
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
}



