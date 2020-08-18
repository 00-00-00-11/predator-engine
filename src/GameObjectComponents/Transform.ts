import Vector2 from "../Core/Vector2";

export default class Transform {

    public position: Vector2;
    public dimension: Vector2;
    public angle: number;
    public pivot: Vector2;

    /**
     * Constructor
     */
    constructor() {
        this.position = new Vector2(0, 0);
        this.dimension = new Vector2(0, 0);
        this.angle = 0;
        this.pivot = new Vector2(0, 0);
    }
}
