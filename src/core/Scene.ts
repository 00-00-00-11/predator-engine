import Container from "../Core/Container";
import GameObjectsManager from "./GameObjectsManager";
import ResourceLoader from "./ResourceLoader";

export default abstract class Scene {

    private imagesUrls: string[];
    private resourceLoader: ResourceLoader;
    public gameObjectsManager: GameObjectsManager;

    /**
     * Constructor
     */
    constructor(imagesUrls: string[] = []) {
        this.imagesUrls = imagesUrls;
        this.resourceLoader = Container.make('ResourceLoader') as ResourceLoader;
        this.gameObjectsManager = Container.make('GameObjectsManager') as GameObjectsManager;
    }

    /**
     * Load all resources
     */
    public loadResources(): Promise<any> {
        // Add scene images to loading queue
        this.imagesUrls.forEach((imageUrl) => {
            this.resourceLoader.addImageToQueue(imageUrl);
        });

        return this.resourceLoader.load();
    }

    /**
     * Loads the actual scene
     */
    abstract loadScene(): void;
}
