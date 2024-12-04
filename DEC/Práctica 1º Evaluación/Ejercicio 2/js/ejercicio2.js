function validarForm(event) {
    // Evito que el formulario se envíe de forma predeterminada
    event.preventDefault();

    // Cojo los elementos del DOM necesarios para la validación
    const password = document.getElementById('contrasenia');
    const passVal = document.getElementById('contrasenia_conf');
    const indicio = document.getElementById('indicio');
    const checkbox = document.getElementById('privacidad');

    // Uso una expresión regular para validar la contraseña
    let passRegExp = /^[A-Z][A-Za-z\d]*\d[A-Za-z\d]*$/

    // Compruebo si la contraseña cumple con los requisitos necesarios
    if (!passRegExp.test(password.value)) {
        alert('La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito')
        password.focus();
        password.select();
        return false;
    }

    // Compruebo que la contraseña esté igual escrita en ambos campos
    if (password.value != passVal.value) {
        alert('Las contraseñas escritas no coinciden, vuelve a intentarlo');
        password.focus();
        password.select();
        return false;
    }

    // Compruebo que el campo de indicio contenga la contraseña para indicar el error
    if (indicio.value.includes(password.value)) {
        alert('El indicio de contraseña no puede ser la contraseña');
        indicio.focus();
        indicio.select();
        return false;
    }

    // Si todo está correcto se hace submit, se reinicia los campos y envia los datos
    event.target.submit();
    indicio.value = '';
    checkbox.checked = false;
    return true;
}