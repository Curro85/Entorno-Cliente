// Ejercicio 2.1
let num = 5;
if (num > 0) {
    console.log("El número " + num + " es positivo.");
} else if (num < 0) {
    console.log("El número " + num + " es negativo.");
} else {
    console.log("El número " + num + " es cero.");
}

// Ejercicio 2.2
let age = 44;
if (age < 18) {
    console.log("La persona es menor de edad.");
} else if (age > 65) {
    console.log("Aquí hay dolores de huesos.");
} else {
    console.log("La persona es adulta.");
}

// Ejercicio 2.3
for (i = 0; i <= 4; i++) {
    console.log(i);
};
console.log("------");

// Ejercicio 2.4
let cont = 0
while (cont <= 4) {
    console.log(cont);
    cont++;
};
console.log("------");

// Ejercicio 2.5
let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 4);
console.log("------");

// Ejercicio 2.6
for (i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
};
console.log("------");

// Ejercicio 2.7
for (j = 0; j <= 5; j++) {
    if (j == 2) {
        continue;
    }
    console.log(j);
};
console.log("------");

// Ejercicio 2.8
let mes = Number(prompt("Introduce el número de un mes"));
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
};