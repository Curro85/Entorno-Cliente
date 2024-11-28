let suma = 0;
document.addEventListener('DOMContentLoaded', () => {
    generarSuma();
    aceptarCond();
});

function generarSuma() {
    const label = document.getElementById('labelSuma');
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    console.log(label);

    let labelContent = `${num1} + ${num2} = ?`;
    label.innerHTML = labelContent;

    suma = num1 + num2;
}

function aceptarCond() {
    const checkbox = document.getElementById('condiciones');
    const btn = document.getElementById('btnSubmit');
    console.log(checkbox)
    checkbox.addEventListener('change', function () {
        btn.disabled = !checkbox.checked;
    });
}

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

function validarPass() {
    const pass = document.getElementById('password');
    const spanPass = document.getElementById('span_pass');
    let passRegExp = /^(?=.*\d).{8,15}$/;

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

function comprobarSuma() {
    const sumaInput = document.getElementById('suma');
    const spanSuma = document.getElementById('span_suma');
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