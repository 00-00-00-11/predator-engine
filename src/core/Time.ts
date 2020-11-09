export default class Time {
    private static _deltaTime: number;
    private static _timestamp: number;

    /**
     * DeltaTime getter
     */
    public static get deltaTime(): number {
        return this._deltaTime;
    }

    /**
     * DeltaTime setter
     */
    public static set deltaTime(deltaTime: number) {
        this._deltaTime = deltaTime;
    }

    /**
     * Timestamp getter
     */
    public static get timestamp(): number {
        return this._timestamp;
    }

    /**
     * Timestamp setter
     */
    public static set timestamp(timestamp: number) {
        this._timestamp = timestamp;
    }
}
