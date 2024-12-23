export default interface PizzaModel {
    id: number;
    name: string;
    veg: boolean;
    price: number;
    description: string;
    quantity: number;
    img: string;
    sizeandcrust: Array<SizeAndCrust<PriceModel>>;
}

interface PriceModel {
    price: number;
}

interface SizeAndCrust<T> {
    mediumPan: T[];
    mediumstuffedcrustcheesemax: T[];
    mediumstuffedcrustvegkebab?: T[]; 
    mediumstuffedcrustchickenseekhkebab?: T[];
}
