class Car {
    readonly _sNumber: number;

    constructor(private _color: string, private _name: string) {
        this._sNumber = Date.now();
    }

    get sNumber(): number {
        return this._sNumber;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const c = new Car('black', 'BMW');
console.log(c);
c.name = 'AUDI';
c.color = 'grey';
console.log(c);