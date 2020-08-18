import Vector2 from "./Vector2";

export default class Input {

    public static mouseCodes: {
        Left: 0,
        Middle: 1,
        Right: 2,
        Back: 3,
        Forward: 4,
    };
    public static keyCodes = {
        Digit1: 49,
        Digit2: 50,
        Digit3: 51,
        Digit4: 52,
        Digit5: 53,
        Digit6: 54,
        Digit7: 55,
        Digit8: 56,
        Digit9: 57,
        Digit0: 48,
        Minus: 189,
        Equal: 187,
        Backspace: 8,
        KeyQ: 81,
        KeyW: 87,
        KeyE: 69,
        KeyR: 82,
        KeyT: 84,
        KeyY: 89,
        KeyU: 85,
        KeyI: 73,
        KeyO: 79,
        KeyP: 80,
        BracketLeft: 219,
        BracketRight: 221,
        Backslash: 220,
        CapsLock: 20,
        KeyA: 65,
        KeyS: 83,
        KeyD: 68,
        KeyF: 70,
        KeyG: 71,
        KeyH: 72,
        KeyJ: 74,
        KeyK: 75,
        KeyL: 76,
        Semicolon: 186,
        Quote: 222,
        Enter: 13,
        ShiftLeft: 16,
        KeyZ: 90,
        KeyX: 88,
        KeyC: 67,
        KeyV: 86,
        KeyB: 66,
        KeyN: 78,
        KeyM: 77,
        Comma: 188,
        Period: 190,
        Slash: 191,
        ShiftRight: 16,
        ControlLeft: 17,
        AltLeft: 18,
        MetaLeft: 91,
        Space: 32,
        MetaRight: 93,
        AltRight: 18,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Escape: 27
    };
    public mouse: any; // TODO to own type
    public keyboard: any; // TODO to own type

    /**
     * Constructor
     */
    constructor() {
        this.mouse = {
            position: new Vector2(0, 0),
            buttons: {}
        };
        this.keyboard = {};
    }

    /**
     * Get mouse position
     */
    public getMousePosition(): Vector2 {
        return this.mouse.position;
    }

    /**
     * Get mouse button down
     */
    public getMouseButtonDown(mouseCode: number): number | null {
        if (this.mouse.buttons[mouseCode])
            return this.mouse.buttons[mouseCode];

        return null;
    }

    /**
     * Get key down
     */
    public getKeyDown(keyCode: number): number | null {
        if (this.keyboard[keyCode])
            return this.keyboard[keyCode];

        return null;
    }
}
