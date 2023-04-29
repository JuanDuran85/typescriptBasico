import { Products } from './product.model';
import "reflect-metadata";
import "es6-shim";
import { plainToInstance } from 'class-transformer';

const procutsJsonDummy = [
    {
        title: 'Product One',
        price: 10
    },
    {
        title: "Product B",
        price: 20
    }
];


const finalAllProducts = plainToInstance(Products, procutsJsonDummy)
for (const prod of finalAllProducts) {
    console.log(prod);
    console.log(`Info product: ${prod.getInformation()}`);
}