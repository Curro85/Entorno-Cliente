// Calcular factorial
let num = Number(prompt("Introduce un número entero no negativo"));

function calculateFactorial(number) {
    let resultado = 1;
    for (let i = 1; i <= number; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(`El factorial de ${num} es ${calculateFactorial(num)}`);