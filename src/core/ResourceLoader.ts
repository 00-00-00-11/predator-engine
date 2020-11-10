interface MyImage {
    name: string;
    url: string;
    htmlImageElement: HTMLImageElement | null;
}

export default class ResourceLoader {

    private images: MyImage[] = [];

    /**
     * Add image to loading queue
     */
    public addImageToQueue(url: string): void {
        // TODO Throw exception if url is invalid
        this.images.push({
            name: String(url.split('/').pop()?.split('.').shift()),
            url,
            htmlImageElement: null
        });
    }

    /**
     * Get html image element by name
     */
    public getHtmlImageElementByName(name: string): HTMLImageElement | null {
        for (const element of this.images) {
            if (element.name === name) {
                return element.htmlImageElement;
            }
        }

        return null;
    }

    /**
     * Load all given presets
     */
    public load(): Promise<any> {
        // All promises
        const promises: any[] = [];

        // Load all images
        for (const image of this.images) {
            promises.push(new Promise((resolve) => {
                const tmpImage = new Image();
                tmpImage.src = image.url;
                tmpImage.onload = () => {
                    image.htmlImageElement = tmpImage;
                    resolve();
                };
            }));
        }

        return Promise.all(promises);
    }
}
