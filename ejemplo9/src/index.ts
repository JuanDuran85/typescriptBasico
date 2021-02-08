import { calculoImpuestoVentas, Producto } from "./ejemplos/06-desestrectura-funcion";

/*
    ===== Código de TypeScript =====
*/
const carroCompra: Producto[] = [
    {
        description: 'Computador 1',
        precio: 700
    },
    {
        description: 'Computador 2',
        precio: 1000
    },
];

const [total, impuesto] = calculoImpuestoVentas(carroCompra);

console.log(`El subtotal del carro de compra es: ${total}`);
console.log(`El total de impuesto es: ${impuesto}`);
console.log(`El total de la compra es: ${total + impuesto}`);