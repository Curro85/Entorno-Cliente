// Ejercicio 4.1
function findLargestNumber() {
    let maxNum = numeros[0];

    for (i = 1; i < numeros.length; i++) {
        if (numeros[i] > maxNum) {
            maxNum = numeros[i];
        }
    }

    return maxNum;
}

let cantidad = prompt("Ingresa la cantidad de números: ");

cantidad = Number(cantidad);

let numeros = [];

for (i = 0; i < cantidad; i++) {
    let numero = Number(prompt(`Ingresa el número ${i + 1}: `));
    numeros.push(numero);
}


let mayor = findLargestNumber(numeros);

console.log("El número más grande es: " + mayor);