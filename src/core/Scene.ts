import Container from "../Core/Container";
import ResourceLoader from "./ResourceLoader";

export default abstract class Scene {

    private imagesUrlArray: string[];
    private resourceLoader: ResourceLoader;

    /**
     * Constructor
     */
    constructor(imagesUrlArray: string[] = []) {
        this.imagesUrlArray = imagesUrlArray;
        this.resourceLoader = Container.make('ResourceLoader') as ResourceLoader;
    }

    /**
     * Load all resources
     */
    public loadResources(): Promise<any> {
        // Add scene images to loading queue
        this.imagesUrlArray.forEach((imageUrl) => {
            this.resourceLoader.addImageToQueue(imageUrl);
        });

        return this.resourceLoader.load();
    }

    /**
     * Loads the actual scene
     */
    abstract loadScene(): void;
}