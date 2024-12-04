// Esta variabla la creo para almacenar la suma que se genera aleatoriamente para validarla posteriormente
let suma = 0;

// Añado un event listener al DOM para que llame a las funciones de generarSuma() y aceptarCond()
document.addEventListener('DOMContentLoaded', function () {
    generarSuma();
    aceptarCond();
})

/**
 * Esta función genera dos números aleatorios que los muestra en la label
 * del HTML de la suma, estos números se almacenan en la variable suma para así
 * validar que el usuario introduce la respuesta correcta y evitar bots.
 */
function generarSuma() {
    const label = document.getElementById('labelSuma');
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    let labelContent = `${num1} + ${num2} = ?`;
    label.innerHTML = labelContent;

    suma = num1 + num2;
}

/**
 * Esta función deshabilita el botón de crear cuenta por defecto y para
 * activarlo debe marcar el checkbox de aceptar condiciones.
 */
function aceptarCond() {
    const checkbox = document.getElementById('condiciones');
    const btn = document.getElementById('btnSubmit');
    checkbox.addEventListener('change', function () {
        btn.disabled = !checkbox.checked;
    });
}

/**
 * Esta función comprueba que el correo introducido en el formulario
 * cumpla con las condiciones de un correo a través de la expresión regular
 * en caso de no cumplirlas, mostrará un error y tomará el foco el campo.
 */
function validarCorreo() {
    const correo = document.getElementById('correo');
    const spanCorreo = document.getElementById('span_correo');
    let correoRegExp = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    if (!correoRegExp.test(correo.value)) {
        spanCorreo.innerText = 'Correo no válido.';
        correo.classList.add('error');
        correo.focus();
    } else {
        spanCorreo.innerText = '';
        correo.classList.remove('error');
    }
}

/**
 * Esta función valida que la contraseña introducida cumpla los 
 * requisitos que tiene la expresión regular que nos pide
 * que tenga mínimo 8 caracteres y un digito.
 * En caso de error el campo toma el foco y se vacía.
 */
function validarPass() {
    const pass = document.getElementById('password');
    const spanPass = document.getElementById('span_pass');
    let passRegExp = /^(?=.*\d).{8,}$/;

    if (!passRegExp.test(pass.value)) {
        spanPass.innerText = 'Mínimo 8 caracteres y un número.'
        pass.classList.add('error');
        pass.value = '';
        pass.focus();
    } else {
        spanPass.innerText = '';
        pass.classList.remove('error');
    }
}

/**
 * Esta función comprueba que la contraseña introducida anteriormente
 * coincide con la introducida en este campo para confirmar que el 
 * usuario conoce la contraseña que ha puesto para su cuenta.
 * En caso de error el campo toma el foco y se vacía.
 */
function comprobarPass() {
    const pass = document.getElementById('password');
    const passVal = document.getElementById('password_val');
    const spanPassVal = document.getElementById('span_pass_val');

    if (!(pass.value === passVal.value)) {
        spanPassVal.innerText = 'Las contraseñas no coinciden.';
        passVal.classList.add('error');
        passVal.value = '';
        passVal.focus();
    } else {
        spanPassVal.innerText = '';
        passVal.classList.remove('error');
    }
}

/**
 * Esta función comprueba que el resultado introducido coincide con
 * la suma que se genera con la función generarSuma()
 * en caso de error, se genera otra suma aleatoria y toma el foco el campo.
 */
function comprobarSuma() {
    const sumaInput = document.getElementById('suma');
    console.log(sumaInput.value);

    if (!(suma == sumaInput.value)) {
        generarSuma();
        sumaInput.value = '';
        sumaInput.classList.add('error');
        sumaInput.focus();
    } else {
        sumaInput.classList.remove('error');
    }
}