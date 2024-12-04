/**
 * Con esta función tomo el valor del elemento alfabeto y limito
 * el número de rotación posible al tamaño del alfabeto que se elige.
 */
function setRotacion() {
    const alfabeto = document.getElementById('alfabeto');
    const idioma = alfabeto.value;
    const rotacion = document.getElementById('nivel');

    if (idioma === 'esp') {
        rotacion.value = 0;
        rotacion.setAttribute('max', '27');
    } else if (idioma === 'eng') {
        rotacion.value = 0;
        rotacion.setAttribute('max', '26');
    }
}

/**
 * Esta función descifra un mensaje que está cifrado con el cifrado de césar.
 */
function descifrar() {
    // Tomo los elementos del DOM necesarios para descifrar el mensaje y mostrarlo.
    const alfabeto = document.getElementById('alfabeto');
    const idioma = alfabeto.value;
    const textarea = document.getElementById('texto');
    const texto = textarea.value;
    const rotacion = document.getElementById('nivel');
    let nivel_rotado = rotacion.value;
    const descifrado = document.getElementById('resultado');

    // Creo un array que contiene el alfabeto en español e inglés.
    let letras_esp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    let letras_eng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // Creo un array de caracteres especiales por si se incluye en el mensaje, mostrarlos.
    let especiales = ['!', '¡', '¿', '?', '@', '#', ',', '.', '-', '_',
        '%', '$', '(', ')', '=', '&', '/', '{', '}', '[', ']', 'Á', 'É',
        'Í', 'Ó', 'Ú'
    ];

    // Esta variable almacenará el mensaje descifrado para mostrarlo posteriormente.
    let resultado = '';

    if (idioma === 'esp') {
        // Uso dos bucles anidados entre sí para recorrer cada letra del texto introducido.
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < letras_esp.length; j++) {
                // Si la letra del texto en la iteración actual coincide con la letra del alfabeto entra.
                if (texto[i] == letras_esp[j]) {
                    // Si la posición de la letra que coincide se le resta el nivel de rotado y da negativo entra.
                    if (j - nivel_rotado < 0) {
                        /**
                         * EJ: Letra A, Nivel de rotado 8, debería devolver la letra S
                         * "A" está en la posición 0 por lo que al restar 8 sería -8
                         * Para evitar el error del array, lo que hago es sumar al tamaño del array
                         * la posición de la letra que en el caso de "A" es 0, por lo tanto "j" pasará
                         * a valer 27, al restarle el rotado que es 8, nos quedamos con 19 que es la
                         * posición de la letra "S" en el array.
                         */
                        indice = letras_esp.length + j;
                        j = indice;
                    }
                    // Almaceno en el resultado la letra coincidente menos el nivel de rotado para tener la letra descifrada.
                    resultado += `${letras_esp[j - nivel_rotado]}`;
                }
            }

            // Si el texto es un espacio en blanco añado al resultado el espacio en blanco.
            if (texto[i] == ' ') {
                resultado += ' ';
            }

            // Si el texto es un caracter especial lo añado al resultado.
            if (especiales.includes(texto[i])) {
                resultado += texto[i];
            }
        }
        // Aplico la misma lógica que en el caso del idioma español pero con un alfabeto y nivel de rotado de 26 en vez de 27 letras
    } else if (idioma === 'eng') {
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < letras_eng.length; j++) {
                if (texto[i] == letras_eng[j]) {
                    if (j - nivel_rotado < 0) {
                        indice = letras_eng.length + j;
                        j = indice;
                    }
                    resultado += `${letras_eng[j - nivel_rotado]}`;
                }
            }
            if (texto[i] == ' ') {
                resultado += ' ';
            }

            if (especiales.includes(texto[i])) {
                resultado += texto[i];
            }
        }
    };

    // Por ultimo, muestro el resultado en el HTML dentro de un párrafo
    descifrado.innerText = resultado;
}