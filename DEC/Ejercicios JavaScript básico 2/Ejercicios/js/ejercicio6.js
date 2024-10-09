// Generador de secuencia de Fibonacci
let cantidad = Number(prompt("Inserte la cantidad de números a mostrar de Fibonacci"));

function fibonacci(x) {
    let a = 0, b = 1, resultado = 0;
    if (x == 1) {
        console.log(a);
        return;
    }
    console.log(a);
    console.log(b);

    for (let i = 2; i < x; i ++){
        resultado = a + b;
        console.log(resultado);
        a = b;
        b = resultado;
    }
}

fibonacci(cantidad);