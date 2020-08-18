import GameObject from "./GameObject";

export default class GameObjectsManager {

    private gameObjects: GameObject[] = [];

    /**
     * Instantiate gameObject (create)
     */
    instantiate(object: GameObject): GameObject {
        this.gameObjects.push(object);
        return object;
    }

    /**
     * Destroy gameObject (delete)
     */
    destroy(object: GameObject): GameObject {
        for (let i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i].name === object.name) {
                // Make a copy of the object which should be removed
                const copy = this.gameObjects[i];

                // Destroy from memory
                this.gameObjects[i] = null;

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
    getAll(): GameObject[] {
        return this.gameObjects;
    }

    /**
     * Get gameObjects by tag
     */
    getAllByTag(tag: string): GameObject[] {
        return this.gameObjects.filter((gameObject) => {
            return gameObject.tag === tag;
        });
    }

    /**
     * Get gameObject by name
     */
    getByName(name: string): GameObject {
        for (const gameObject of this.gameObjects) {
            if (gameObject.name === name) {
                return gameObject;
            }
        }
    }
}
