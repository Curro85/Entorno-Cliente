// 3.- Calculadora de IMC
let weight = Number(prompt("Introduce tu peso en kilogramos"));
let height = Number(prompt("Introduce tu estatura en metros"));
let imc= weight / (height ** 2);

if (imc >= 30) {
    console.log(`IMC: ${imc}, Clasificación: Obesidad`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc}, Clasificación: Sobrepeso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc}, Clasificación: Peso normal`);
} else {
    console.log(`IMC: ${imc}, Clasificación: Bajo peso`)
}

