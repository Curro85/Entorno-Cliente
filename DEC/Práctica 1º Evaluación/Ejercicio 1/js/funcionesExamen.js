function esCurioso(num) {
    // Creo la variable suma para sumar los cubos de los digitos del número pasado como parametro
    let suma = 0;

    // Convierto el número como parámetro en una cadena de carácteres para poder realizar el cálculo a cada dígito
    let digitos = num.toString();

    // En este bucle, recorro cada dígito, lo elevo al cubo y lo añado a la variable suma
    for (let i = 0; i < digitos.length; i++) {

        // Convierto de nuevo el dígito en un entero para elevarlo al cubo
        let digito = parseInt(digitos[i]);
        suma += Math.pow(digito, 3);
    }

    // Si la variable suma coincide con el número como parámetro devuelvo true
    return suma == num;
}


function mostrarNumCuriosos() {
    // Creo una lista para almacenar los números curiosos
    let numCuriosos = [];

    // Creo la variable contador parar el bucle y la variable num para iniciar la busqueda desde 1
    let contador = 0;
    let num = 1;

    // En este bucle, llamo a la función esCurioso() y en caso de que sea true almaceno el número en la lista
    while (contador < 5) {
        if (esCurioso(num)) {
            numCuriosos.push(num);
            contador++;
        }
        num++;
    }

    // Una vez acabado el bucle muestro un alert con los números obtenidos
    alert(`Los primeros 5 números curiosos son: ${numCuriosos}`);
}

mostrarNumCuriosos();