// 1.- Calculadora de gastos de viaje
let alojamiento = Number(prompt("Introduce los gastos para alojamiento"));
let comida = Number(prompt("Introduce los gastos para alimentación"));
let ocio = Number(prompt("Introduce los gastos para entretenimiento"));
let total = (alojamiento + comida + ocio);
console.log(`El coste total del viaje es de: ${total}`);