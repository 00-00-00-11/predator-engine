import Image from "../Types/Image";

export default class ResourceLoader {

    private images: Image[];

    /**
     * Add image to loading queue
     */
    public addImageToQueue(url: string): void {
        this.images.push({
            name: url.split('/').pop().split('.').shift(),
            url,
            image: null
        });
    }

    /**
     * Get html image element by name
     */
    public getImageObjectByName(name: string): HTMLImageElement {
        for (const element of this.images) {
            if (element.name === name) {
                return element.image;
            }
        }

        return null;
    }

    /**
     * Load all given presets
     */
    public load(): Promise<any> {
        // All promises
        const promises = [];

        // Load all images
        this.images.forEach((image) => {
            promises.push(new Promise((resolve, reject) => {
                const tmpImage = new Image();
                tmpImage.src = image.url;
                tmpImage.onload = () => {
                    resolve();
                };
            }));
        });

        return Promise.all(promises);
    }
}