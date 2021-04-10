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
                this.createWall(pos);
                this.createDots(pos);
            }
        }
    }
    /**
     * Verifies if the wall layer contains any values at given position,
     * if it the case it creates a wall if the value is 1.
     * @param {*} pos position to verify the layer.
     */
    createWall(pos) {
        if (game.maze._wallLayer.contains(pos)) {
            if (game.maze._wallLayer.getTile(pos) == 1) {
                $("#game").append(`<p class='wall' 
            style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></p>`);
            }
        }
    }
    /**
     * Verifies if the dot layer contains any values at given position,
     * if it the case it creates a dot depending on it's value,
     * pac dot if 2, energizer if 3.
     * @param {*} pos position to verify the layer.
     */
    createDots(pos) {
        if (game.maze._dotLayer.contains(pos)) {
            if (game.maze._dotLayer.getTile(pos) == 2) {
                $("#game").append(`<p class='pacdot' 
                style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></p>`);
            }
            else if (game.maze._dotLayer.getTile(pos) == 3) {
                $("#game").append(`<p class='energizer' 
                style='top:${15 * pos.row}px; left:${15 * pos.column}px; '></p>`);
            }
        }
    }

}
