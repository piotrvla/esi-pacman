/**
 * Dot is a fixed Pacman element that may be energized or not.
 */
class Dot extends Tile {
    /**
     * To be created, dot needs unique id, and also
     * a boolean for isEnergizer
     * @param {*} id unique id.
     * @param {*} isEnergizer false if not energizer, else true.
     */
    constructor(id, isEnergizer) {
        super(id);
        this._isEnergizer = isEnergizer;
    }
    /**
     * Returns id.
     * @returns {string}
     */
    get id() { return this._id; }
    /**
     * Returns isEnergizer.
     * @returns {boolean}
     */
    get isEnergizer() { return this._isEnergizer; }
}
