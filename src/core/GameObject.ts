import Transform from "../GameObjectComponents/Transform";
import EngineRenderer from "./Renderer";
import Input from "./Input";
import Container from "./Container";
import Renderer from "../GameObjectComponents/Renderer";
import GameObjectsManager from "./GameObjectsManager";
import Random from "./Random";
import RectRenderer from "../GameObjectComponents/RectRenderer";
import CircleRenderer from "../GameObjectComponents/CircleRenderer";

export default abstract class GameObject {

    // Basic attributes
    public name: string;
    public tag: string;

    // Components
    public transform: Transform;
    public renderer: Renderer | null;

    // Engine
    public engineRenderer: EngineRenderer;
    public input: Input;
    public gameObjectsManager: GameObjectsManager;

    /**
     * Constructor
     */
    constructor() {
        // Basic attributes
        this.name = Random.string();
        this.tag = 'GameObject';

        // Components
        // Add default components to gameObject
        this.transform = new Transform();
        this.renderer = new RectRenderer();

        // Engine
        this.engineRenderer = Container.make('Renderer') as EngineRenderer;
        this.input = Container.make('Input') as Input;
        this.gameObjectsManager = Container.make('GameObjectsManager') as GameObjectsManager;
    }

    /**
     * Add renderer component to gameObject
     */
    public addRenderer(renderer: Renderer): void {
        this.renderer = renderer;
    }

    /**
     * This method is called before update by Game
     */
    public draw(): void {
        // switch(typeof this.render)
        // TODO how to draw according to the renderer

        if (this.renderer instanceof RectRenderer) {
            console.log('I would draw a rect');
        }

        if (this.renderer instanceof CircleRenderer) {
            console.log('I would draw a circle');
        }
    }

    /**
     * This method is called once per frame by Game
     */
    abstract update(): void;
}
