/**
 * Represents the visual part of the pac man game.
 */
class GameView {
    /**
     * Need the game as parameter to be initialized.
     * @param {*} game 
     */
    constructor(game) {
        for (let i = 0; i < game.maze.nbRows; i++) {
            for (let j = 0; j < game.maze.nbColumns; j++) {
                let pos = new Position(i, j);
                if (game.maze._wallLayer.hasTile(pos)) {
                    this.createWall(pos);
                }
                if (game.maze._dotLayer.hasTile(pos)) {
                    this.createDot(pos, game.maze.getDotLayerTile(pos));
                }
            }
        }
    }

    /**
    * Vizualizes a wall in the game.
    * @param {*} pos position to verify the layer.
    */
    createWall(pos) {
        $("#game").append(`<span class='wall' 
        style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></span>`);
    }
    /**
     * Vizualizes a pac dot or a energizer dot depending on it's id and
     * the value of isEnergizer.
     * @param {*} pos position to verify the layer.
     */
    createDot(pos, tile) {
        if (tile.id == "dot" && !tile.isEnergizer) {
            $("#game").append(`<span class='pacdot' 
        style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></span>`);
        }
        if (tile.id == "energizer" && tile.isEnergizer == true) {
            $("#game").append(`<span class='energizer' 
            style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></span>`);
        }
    }
}



