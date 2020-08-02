export default class Container {

    private static bindings: [];

    /**
     * Bind into container
     */
    public static bind(object: object): void {
        // Define static property if not defined
        if (!this.bindings) {
            this.bindings = [];
        }

        // Place object into container
        const bindingsKey = object.constructor.name;
        this.bindings[bindingsKey] = object;
    }

    /**
     * Get out of the container
     */
    public static make(bindingName: string): object {
        if (!this.bindings) {
            return null;
        }

        return this.bindings[bindingName];
    }
}