export default class Exception extends Error {

    public message: string;
    public code: number;

    /**
     * Constructor
     */
    constructor(message: string, code: number = 0) {
        super(message);
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
