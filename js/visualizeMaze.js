
/**
 * Display maze's walls, also the pac dots on the game board.
 */
function displayMaze() {
    for (let i = 0; i < RAW_MAZE.table.length; i++) {
        for (let j = 0; j < RAW_MAZE.table[i].length; j++) {
            let mazeTile = RAW_MAZE.table[i][j];
            if (mazeTile == 1) {
                $("#game").append(`<p class='wall' 
                style='top:${15 * i}px; left:${15 * j}px; '></p>`);
            }
            if (mazeTile == 2) {
                $("#game").append(`<p class='pacdot' 
                style='top:${15 * i}px; left:${15 * j}px; '></p>`);
            }

        }
    }
}