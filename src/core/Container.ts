export default class Container {

    private static bindings: Map<string, any>;

    /**
     * Bind into container
     */
    public static bind(bindingName: string, object: any): void {
        // Define static property if not defined
        if (!this.bindings) {
            this.bindings = new Map();
        }

        // Place object into container
        this.bindings.set(bindingName, object);
    }

    /**
     * Get out of the container
     */
    public static make(bindingName: string): object {
        return this.bindings.get(bindingName);
    }
}
