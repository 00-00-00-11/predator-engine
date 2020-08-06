export default class Time {
    private static _deltaTime: number;
    private static _timestamp: number;

    /**
     * DeltaTime getter
     */
    static get deltaTime(): number {
        return this._deltaTime;
    }

    /**
     * DeltaTime setter
     */
    static set deltaTime(deltaTime: number) {
        this._deltaTime = deltaTime;
    }

    /**
     * Timestamp getter
     */
    static get timestamp(): number {
        return this._timestamp;
    }

    /**
     * Timestamp setter
     */
    static set timestamp(timestamp: number) {
        this._timestamp = timestamp;
    }
}