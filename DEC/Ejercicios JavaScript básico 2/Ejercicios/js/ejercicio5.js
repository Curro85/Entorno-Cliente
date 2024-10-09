// Generador de números primos
let inicio = Number(prompt("Introduce el número inicial"));
let fin = Number(prompt("Introduce el número final"));

let primos = [];
let divisores = 0;

console.log(`Los numeros primos entre ${inicio} y ${fin} son: `);
for (let i = inicio; i <= fin; i++){
    divisores = 2

    for(let j = 2; j < i ; j++) {
        if (i % j == 0) {
            divisores++;
        }
    }

    if (divisores == 2) {
        console.log(i);
    }
}