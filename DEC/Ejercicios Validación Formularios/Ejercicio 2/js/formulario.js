/**
 * Esta función valida que el nombre de usuario introducido
 * contenga mínimo 8 caracteres y no tenga espacios
 * a través de una expresión regular.
 * En caso de error muestra un mensaje indicando las condiciones.
 */
function validarNombre() {
    const nombre = document.getElementById('nombre');
    const spanNombre = document.getElementById('span_nombre');
    let nombreRegExp = /^[^\s]{8,}$/;

    if (!nombreRegExp.test(nombre.value)) {
        spanNombre.innerText = 'El nombre debe ser de 8 caracteres y sin espacios.';
        nombre.classList.add('error');
    } else {
        spanNombre.innerText = '';
        nombre.classList.remove('error');
    }
}

/**
 * Esta función valida que la contraseña introducida tenga una
 * longitud de 6 a 10 caracteres, un número y una mayúscula, sin símbolos
 * a través de una expresión regular.
 * En caso de error muestra un mensaje indicando los requisitos.
 */
function validarPass() {
    const password = document.getElementById('password');
    const spanPass = document.getElementById('span_pass');
    let passRegExp = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{6,10}$/

    if (!passRegExp.test(password.value)) {
        spanPass.innerText = 'Longitud 6-10, un número, una mayúscula y no valen símbolos';
        password.classList.add('error');
    } else {
        spanPass.innerText = '';
        password.classList.remove('error');
    }
}
