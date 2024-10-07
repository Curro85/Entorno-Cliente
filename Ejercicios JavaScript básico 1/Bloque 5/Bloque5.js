// Ejercicio 5.1
//Imprimir los números del 20 al 30 en la consola.
console.log("Números del 20 al 30: ");

for (i = 20; i <= 30; i++) {
    console.log(i);
}

//Imprimir los números pares del 30 al 50 en la consola.
console.log("Números pares del 30 al 50: ");

for (i = 30; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//Calcular la suma de los primeros 50 números naturales.
let suma = 0;

for (i = 0; i <= 50; i++) {
    suma += i;
}

console.log("La suma de los primeros 50 números es: " + suma);

//Imprimir la tabla de multiplicar del 8.
console.log("Tabla de multiplicar del 8: ");

let multiplicacion = 8;

for (i = 0; i <= 10; i++) {
    multiplicacion *= i;
    console.log("8 x " + i + " = " + multiplicacion);
    multiplicacion = 8;
}


//Imprimir los elementos de un array.
let coches = ["Ford", "Volvo", "Opel", "Mazda"];

console.log("Coches: ");

for (i = 0; i < coches.length; i++) {
    console.log(coches[i]);
}

//Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.
console.log("Triángulo con altura 9");

for (i = 0; i < 9; i++) {
    console.log("*".repeat(i));
}


//Calcular la suma de los números pares del 1 al 50.
let sum = 0;

for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log("La suma de los números pares del 1 al 50 es : " + sum);

//Imprimir los números del 30 al 20 en orden descendente.
console.log("Números del 30 al 20 en orden descendiente.")

for (i = 30; i >= 20; i--) {
    console.log(i);
}

//Calcular el promedio de un array de números.
let notas = [10, 8, 6, 9, 7, 8, 10];
let sumaNotas = 0;
let promedio;

for (i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}

promedio = sumaNotas / notas.length;

console.log("El promedio es: " + promedio);