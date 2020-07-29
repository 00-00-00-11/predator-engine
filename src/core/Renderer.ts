export default class Renderer {

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    /**
     * Constructor
     */
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }
}