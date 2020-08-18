import Renderer from "./Renderer";
import SceneManager from "./SceneManager";
import GameObjectsManager from "./GameObjectsManager";
import Input from "./Input";
import ResourceLoader from "./ResourceLoader";
import Container from "./Container";
import Scene from "./Scene";
import Time from "./Time";
import Vector2 from "./Vector2";

export default class Game {

    private renderer: Renderer;
    private sceneManager: SceneManager;
    private gameObjectsManager: GameObjectsManager;
    private input: Input;
    private resourceLoader: ResourceLoader;
    private lastFrameTimestamp: number = 0;

    /**
     * Constructor
     */
    constructor(canvas: HTMLCanvasElement) {
        // Place all puzzle elements of the engine to class properties
        this.renderer = new Renderer(canvas);
        this.sceneManager = new SceneManager();
        this.gameObjectsManager = new GameObjectsManager();
        this.input = new Input();
        this.resourceLoader = new ResourceLoader();

        // Container bindings
        Container.bind(this);
        Container.bind(this.renderer);
        Container.bind(this.input);
        Container.bind(this.gameObjectsManager);
        Container.bind(this.sceneManager);
        Container.bind(this.resourceLoader);

        // Register listeners
        this.registerListeners();
    }

    /**
     * Adds new scene to the SceneManager
     */
    public addScene(sceneName: string, scene: Scene): void {
        this.sceneManager.add(sceneName, scene);
    }

    /**
     * Load a scene and run the game
     */
    public loadSceneAndRun(sceneName: string): void {
        this.sceneManager.loadSceneResourcesAndCallLoad(sceneName);
        this.gameLoop(0);
    }

    /**
     * This method is called every frame
     */
    private gameLoop(timestamp: number): void {
        // Get deltaTime and set it to Time object
        Time.deltaTime = this.getDeltaTime(timestamp);

        // Get timestamp and set it to Time object
        Time.timestamp = timestamp;

        // Call draw function of all gameObjects
        for (const gameObject of this.gameObjectsManager.getAll()) {
            gameObject.draw();
        }

        // Call update function of all gameObjects
        for (const gameObject of this.gameObjectsManager.getAll()) {
            gameObject.update();
        }

        // Render on the screen
        this.renderer.flush();

        // Start gameloop again
        this.lastFrameTimestamp = timestamp;

        // Request gameLoop again
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * Method to get delta time since last frame
     */
    private getDeltaTime(timestamp: number): number {
        return (timestamp - this.lastFrameTimestamp) / 1000;
    }

    /**
     * Register listeners
     */
    private registerListeners(): void {
        // Mouse move
        this.renderer.canvas.addEventListener('mousemove', (event) => {
            // Get relative coordinates
            const rect = this.renderer.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Inject into Input class
            this.input.mouse.position = new Vector2(x, y);
        });

        // Mouse down
        this.renderer.canvas.addEventListener('mousedown', (event) => {
            this.input.mouse.buttons[event.button] = true;
        });

        // Mouse up
        this.renderer.canvas.addEventListener('mouseup', (event) => {
            this.input.mouse.buttons[event.button] = false;
        });

        // Key on keyboard is down
        window.addEventListener('keydown', (event) => {
            this.input.keyboard[event.keyCode] = true;
        });

        // Key on keyboard is up
        window.addEventListener('keyup', (event) => {
            this.input.keyboard[event.keyCode] = false;
        });
    }
}
