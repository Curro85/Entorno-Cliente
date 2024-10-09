// Calculadora de descuentos
let precio = Number(prompt("Inserte precio del producto"));
let descuento = Number(prompt("Inserte procentaje de descuento"));

function precioFinal(precio, descuento) {
    let precioFinal = precio - ((precio * descuento) / 100);
    return precioFinal;
}

let precioDesc = precioFinal(precio, descuento);
console.log(`El precio final del producto al aplicarle un descuento del ${descuento}% es: ${precioDesc}`)