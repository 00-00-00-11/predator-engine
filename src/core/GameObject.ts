import Transform from "../GameObjectComponents/Transform";
import EngineRenderer from "./Renderer";
import Input from "./Input";
import Container from "./Container";
import Renderer from "../GameObjectComponents/Renderer";
import BoxRenderer from "../GameObjectComponents/BoxRenderer";
import GameObjectsManager from "./GameObjectsManager";

// TODO
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
    // TODO TYPES
    public game: object;
    public sceneManager: object;
    public resourceLoader: object;

    /**
     * Constructor
     */
    constructor() {
        // Basic attributes
        this.name = 'test'; // TODO Generate randomly
        this.tag = 'GameObject';

        // Components
        this.transform = new Transform();
        this.renderer = new BoxRenderer();

        // Engine
        this.engineRenderer = Container.make('Renderer') as EngineRenderer;
        this.input = Container.make('Input') as Input;
        this.gameObjectsManager = Container.make('GameObjectsManager') as GameObjectsManager;
        // TODO TYPES
        this.game = Container.make('Game');
        this.sceneManager = Container.make('SceneManager');
        this.resourceLoader = Container.make('ResourceLoader');
    }

    /**
     * Add renderer component to gameObject
     */
    public addRenderer(renderer: Renderer): void {
        this.renderer = renderer;
    }
}