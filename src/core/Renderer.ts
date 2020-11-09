import RendererException from "../Exceptions/RendererException";

// TODO, refactor, atm it's just a proof of concept
export default class Renderer {

    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    private rendererQueue: any[] = [];

    /**
     * Constructor
     */
    constructor(canvas: HTMLCanvasElement) {
        // Get canvas context
        const context = canvas.getContext('2d');

        // Throw exception if context is not available
        if (context === null) {
            throw new RendererException('Renderer context is not available, renderer is not able to draw anything!');
        }

        // Store canvas and context as class properties
        this.canvas = canvas;
        this.context = context;
    }

    /**
     * Adds object to draw queue
     */
    public addRectToRendererQueue(x: number, y: number, width: number, height: number, color: string = '#fff', layer: number = 1): void {
        // Add object to array which will be drawn
        this.rendererQueue.push({
            x,
            y,
            width,
            height,
            color,
            layer,
            type: 'rect'
        });
    }

    /**
     * Draw everything what's in the queue
     */
    public flush(): void {
        // Clear the viewport
        this.context!.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Sort render queue by layer
        this.rendererQueue = this.rendererQueue.sort((a, b) => (a.layer > b.layer) ? 1 : -1);

        // Render
        this.rendererQueue.forEach((toRender) => {
            switch (toRender.type) {
                case 'rect':
                    this.renderRect(toRender);
                    break;
            }
        });

        // Clear render queue
        this.rendererQueue = [];
    }

    /**
     * Render rect
     */
    private renderRect(toRender: any): void {
        this.context.save();
        this.context.beginPath();
        this.context.fillStyle = toRender.color;
        this.context.fillRect(toRender.x, toRender.y, toRender.width, toRender.height);
        this.context.stroke();
        this.context.restore();
    }
}
