import Transform from "./Transform";
import Renderer from "../Core/Renderer";
import Input from "../Core/Input";
import Container from "../Core/Container";
import GameObjectsManager from "../Core/GameObjectsManager";
import Random from "../Core/Random";

export default abstract class GameObject {

    // Basic attributes
    public name: string;
    public tag: string;

    // Components
    public transform: Transform;

    // Engine
    public input: Input;
    public renderer: Renderer;
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

        // Engine
        this.renderer = Container.make('Renderer') as Renderer;
        this.input = Container.make('Input') as Input;
        this.gameObjectsManager = Container.make('GameObjectsManager') as GameObjectsManager;
    }

    /**
     * This method is called before update by Game
     */
    abstract draw(): void;

    /**
     * This method is called once per frame by Game
     */
    abstract update(): void;
}
