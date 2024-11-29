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

function descifrar() {
    const alfabeto = document.getElementById('alfabeto');
    const idioma = alfabeto.value;
    const textarea = document.getElementById('texto');
    const texto = textarea.value;
    const rotacion = document.getElementById('nivel');
    let nivel_rotado = rotacion.value;
    const descifrado = document.getElementById('resultado');

    let letras_esp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

    let letras_eng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

    let especiales = ['!', '¡', '¿', '?', '@', '#', ',', '.', '-', '_',
        '%', '$', '(', ')', '=', '&', '/', '{', '}', '[', ']', 'Á', 'É',
        'Í', 'Ó', 'Ú'
    ]

    let resultado = '';

    if (idioma === 'esp') {
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < letras_esp.length; j++) {
                if (texto[i] == letras_esp[j]) {
                    if (j - nivel_rotado < 0) {
                        indice = letras_esp.length + j;
                        j = indice;
                    }
                    resultado += `${letras_esp[j - nivel_rotado]}`
                }
            }

            if (texto[i] == ' ') {
                resultado += ' ';
            }

            if (especiales.includes(texto[i])) {
                resultado += texto[i];
            }
        }
    } else if (idioma === 'eng') {
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < letras_eng.length; j++) {
                if (texto[i] == letras_eng[j]) {
                    if (j - nivel_rotado < 0) {
                        indice = letras_eng.length + j;
                        j = indice;
                    }
                    resultado += `${letras_eng[j - nivel_rotado]}`
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

    descifrado.innerText = resultado;

}