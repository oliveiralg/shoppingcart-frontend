export class Item {
    id: number;
    name: string;
    price: number;
    constructor(private _id: number, public _name: string, public _price: number) {
        this.id = _id;
        this.name = _name;
        this.price = _price;
    }
}
