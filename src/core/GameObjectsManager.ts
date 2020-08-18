import GameObject from "./GameObject";

export default class GameObjectsManager {

    private gameObjects: GameObject[] = [];

    /**
     * Instantiate gameObject (create)
     */
    public instantiate(object: GameObject): GameObject {
        this.gameObjects.push(object);
        return object;
    }

    /**
     * Destroy gameObject (delete)
     */
    public destroy(object: GameObject): GameObject {
        for (let i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i].name === object.name) {
                // Make a copy of the object which should be removed
                const copy = this.gameObjects[i];

                // Destroy from memory
                this.gameObjects.splice(i, 1);
                // delete this.gameObjects[i]; // TODO is it better?

                // Destroy from array
                this.gameObjects.splice(i, 1);

                // Return deleted object, in case this is needet
                return copy;
            }
        }

        return object;
    }

    /**
     * Get all gameObjects
     */
    public getAll(): GameObject[] {
        return this.gameObjects;
    }

    /**
     * Get gameObjects by tag
     */
    public getAllByTag(tag: string): GameObject[] {
        return this.gameObjects.filter((gameObject) => {
            return gameObject.tag === tag;
        });
    }

    /**
     * Get gameObject by name
     */
    public getByName(name: string): GameObject | null {
        for (const gameObject of this.gameObjects) {
            if (gameObject.name === name) {
                return gameObject;
            }
        }

        return null;
    }
}
