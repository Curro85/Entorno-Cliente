// Ejercicio 4.1
let cantidad = Number(prompt("Cantidad de números a introducir"));
let arrNum = [];

for (i = 0; i < cantidad; i++) {
    let num = Number(prompt("Introduce un número en la posición" + (i + 1)));
    arrNum[i] += num;
}
console.log(arrNum);