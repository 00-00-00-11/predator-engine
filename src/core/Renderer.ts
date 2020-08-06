// TODO
export default class Renderer {

    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    /**
     * Constructor
     */
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }
}