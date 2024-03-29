import { calculoImpuestoVentas, Producto } from "./06-desestrectura-funcion";

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

console.debug(`El subtotal del carro de compra es: ${total}`);
console.debug(`El total de impuesto es: ${impuesto}`);
console.debug(`El total de la compra es: ${total + impuesto}`);