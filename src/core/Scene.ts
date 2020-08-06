import Container from "../Core/Container";
import ResourceLoader from "./ResourceLoader";

export default class Scene {

    public imagesUrlArray: string[];
    public resourceLoader: ResourceLoader;

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
}