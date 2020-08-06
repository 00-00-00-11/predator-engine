export default class Color {

    public r: number;
    public g: number;
    public b: number;
    private _a: number;

    /**
     * Constructor
     */
    constructor(r: number = 0, g: number = 51, b: number = 254, a: number = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this._a = a;
    }

    /**
     * Setter for hex value
     */
    set hex(hex: string) {
        const color = this._hexToRgb(hex);
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this._a = color.a;
    }

    /**
     * Getter for hex value
     */
    get hex(): string {
        return this._rgbaToHex();
    }

    /**
     * Alpha getter
     */
    get a(): number {
        return this._a;
    }

    /**
     * Alpha setter
     */
    set a(a: number) {
        // Some controlling that alpha does not go over 1 and dont fall below 0
        // It is important because otherwise object disappears
        if (a < 0)
            this._a = 0;
        else if (a > 1)
            this._a = 1;
        else
            this._a = a;
    }

    /**
     * Helper method which converts hex to rgb
     */
    private _hexToRgb(hex: string): Color {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return new Color(r, g, b, 1);
    }

    /**
     * Helper method which converts rgba to hex
     */
    private _rgbaToHex(): string {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);
        let a = Math.round(this._a * 255).toString(16);

        if (r.length === 1)
            r = "0" + r;
        if (g.length === 1)
            g = "0" + g;
        if (b.length === 1)
            b = "0" + b;
        if (a.length === 1)
            a = "0" + a;

        return "#" + r + g + b + a;
    }
}