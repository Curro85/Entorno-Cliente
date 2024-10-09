// Ejercicio 3.1
let radio = Number(prompt("Introduce el radio del círculo"));
let area = 0;
let perimetro = 0;

function calcArea() {
    area = Math.PI * (Math.pow(radio, 2));
    return area;
}

function calcPerimetro() {
    perimetro = 2 * Math.PI * radio;
    return perimetro;
}

console.log("El área del círculo es: " + calcArea());
console.log("El perímetro del círculo es: " + calcPerimetro());

// Ejercicio 3.2
function calculatePower(x, y) {
    let power = 0;
    power = Math.pow(x, y);
    return power;
}
let result = calculatePower(2, 3);
console.log(result);