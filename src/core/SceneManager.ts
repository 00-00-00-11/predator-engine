import Scene from "./Scene";

export default class SceneManager {
    public scenes: Scene[] = [];

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
        const scene: Scene = this.scenes[sceneName];
        await scene.loadResources();
        scene.loadScene();
    }
}