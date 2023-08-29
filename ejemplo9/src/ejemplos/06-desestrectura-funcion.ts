/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    description: string;
    precio: number;
}

const telefono: Producto = {
    description: 'Telefono 1',
    precio: 340
}

const tableta: Producto = {
    description: 'tableta 1',
    precio: 600,
}

export function calculoImpuestoVentas(productos: Producto[]) : [number, number] {
    let total = 0;

    productos.forEach(({precio})=>{
        total += precio;
    });

    let impuestoTotal = total * 0.16;

    return [total, impuestoTotal];
}

const articulos = [tableta,telefono]

const [total, impuesto] = calculoImpuestoVentas(articulos);

console.debug(`El total de la venta es: ${total}`);
console.debug(`El total del impuesto es: ${impuesto}`);