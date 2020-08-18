export default class Exception {

    public message: string;
    public code: number;

    /**
     * Constructor
     */
    constructor(message: string, code: number = 0) {
        this.message = message;
        this.code = code;
    }

    /**
     * Get exception message
     */
    public getMessage(): string {
        return this.message;
    }

    /**
     * Get exception code
     */
    public getCode(): number {
        return this.code;
    }
}
