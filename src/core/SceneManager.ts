import Scene from "./Scene";

export default class SceneManager {
    public scenes: any = [];

    /**
     * Adds new scene to the SceneManager
     */
    public add(sceneName: string, scene: Scene): void {
        this.scenes[sceneName] = scene;
    }

    /**
     * Load scene resources
     */
    public async loadSceneResourcesAndCallLoad(sceneName: string): Promise<any> {
        // Get the scene by name
        const scene: Scene = this.scenes[sceneName];

        // Load all it's resources (wait before loading completes)
        await scene.loadResources();

        // Call loadScene method of the scene
        scene.loadScene();
    }
}
