/**
 * A component represents an ingame object.
 */
class Component {
     /**
     * To be created, a Component just need an id.
     *
     * @param {string} id unique tile's id
     */
      constructor(id) {
        this._id = id;
    }

    /**
     * Returns the component's id.
     * @returns {string}
     */
    get id() { return this._id; }
}