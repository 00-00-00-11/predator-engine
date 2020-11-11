import GameObject from "./GameObject";

export default abstract class RectGameObject extends GameObject {
    /**
     * This method is called before update by Game
     */
    public draw(): void {
        this.renderer.addRectToRendererQueue(
            this.transform.position.x,
            this.transform.position.y,
            this.transform.dimension.x,
            this.transform.dimension.y
        );
    }

    /**
     * This method is called once per frame by Game
     */
    abstract update(): void;
}
