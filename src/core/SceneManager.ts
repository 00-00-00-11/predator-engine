import Scene from "./Scene";

export default class SceneManager {
    public scenes: Scene[] = [];

    /**
     * Adds new scene to the SceneManager
     */
    public add(sceneName: string, scene: Scene): void {
        this.scenes[sceneName] = Scene;
    }

    /**
     * Load scene resources
     */
    public loadSceneResources(sceneName: string): Promise<any> {
        return this.scenes[sceneName].loadResources();
    }
}