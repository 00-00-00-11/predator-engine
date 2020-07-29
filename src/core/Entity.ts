import Container from "./Container";
import Renderer from "./Renderer";
import Input from "./Input";

export default abstract class Entity {

    protected game: object;
    protected renderer: Renderer;
    protected input: Input;
    protected gameObjectsManager: object;
    protected sceneManager: object;
    protected resourceLoader: object;

    /**
     * Constructor
     */
    constructor() {
        this.game = Container.make('Game');
        this.renderer = Container.make('Renderer') as Renderer;
        this.input = Container.make('Input') as Input;
        this.gameObjectsManager = Container.make('GameObjectsManager');
        this.sceneManager = Container.make('SceneManager');
        this.resourceLoader = Container.make('ResourceLoader');
    }
}