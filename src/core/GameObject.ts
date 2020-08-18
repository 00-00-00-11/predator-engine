import Transform from "../GameObjectComponents/Transform";
import EngineRenderer from "./Renderer";
import Input from "./Input";
import Container from "./Container";
import Renderer from "../GameObjectComponents/Renderer";
import BoxRenderer from "../GameObjectComponents/BoxRenderer";
import GameObjectsManager from "./GameObjectsManager";
import Random from "./Random";

export default class GameObject {

    // Basic attributes
    public name: string;
    public tag: string;

    // Components
    public transform: Transform;
    public renderer: Renderer;

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
        this.transform = new Transform();
        this.renderer = new BoxRenderer();

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
     * This method is called before update
     */
    public draw(): void {
        // TODO how to draw according to the renderer
    }

    /**
     * This method is called once per frame
     */
    public update(): void {
        // Do something
    }
}
