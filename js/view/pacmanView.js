/**
 * The main point of visualizing the pacman.
 */
 class PacmanView {
    /**
     * Needs PacmanCtrl to be initialized.
     * @param {PacmanCtrl} pacmanCtrl 
     */
    constructor(pacmanCtrl) {
    $(document).on("keydown", function (event) {
            switch (event.key) {
                case "ArrowLeft":
                    pacmanCtrl.askToChangeDirection(Direction.WEST);
             
                    break;
                case "ArrowRight":
                    pacmanCtrl.askToChangeDirection(Direction.EAST);
              
                    break;
                case "ArrowUp":
                    pacmanCtrl.askToChangeDirection(Direction.NORTH);
                
                    break;
                case "ArrowDown":
                    pacmanCtrl.askToChangeDirection(Direction.SOUTH);
                    break;
                case "C":
                case "c":
                    pacmanCtrl.addLife();
                    break;
            }
        });


    }
}
