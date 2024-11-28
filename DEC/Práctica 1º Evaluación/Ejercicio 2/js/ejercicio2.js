function validarForm() {
    // Cojo los elementos del DOM necesarios para la validación
    const password = document.getElementById('contrasenia');
    const passVal = document.getElementById('contrasenia_conf');
    const indicio = document.getElementById('indicio');

    // Uso una expresión regular para validar la contraseña
    let passRegExp = /^[A-Z]{5,}(?=.*\d).*$/
}