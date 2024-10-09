// Conversor de temperatura
let tipo = Number(prompt(`Selecciones conversión:
    1.- Celsius a Fahrenheit
    2.- Fahrenheit a Celsius`));
let temperatura = Number(prompt("Introduce la temperatura"));

function celToFahr(temp) {
    let resultado = (temp * (9/5)) + 32;
    return resultado;
}

function fahrToCel(temp) {
    let resultado = (temp - 32) * (5/9);
    return resultado;
}

switch (tipo) {
    case 1:
        console.log(`${temperatura}Cº son: ${celToFahr(temperatura)}Fº`);
        break;
    case 2:
        console.log(`${temperatura}Fº son: ${fahrToCel(temperatura)}Cº`);
        break;
    default:
        console.log("Introduce correctamente el tipo de dato");
}