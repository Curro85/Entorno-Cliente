function validacion(event) {
    // Evito que el formulario se envie de forma predeterminada.
    event.preventDefault();

    // Creo estas variables para almacenar los errores, y el mensaje de alerta.
    let errores = [];
    let enfocar = [];
    let alerta = "";

    // Constantes con los elementos a validar y las expresiones regulares para validarlos.
    const nombre = document.getElementById('nombre');
    const ape1 = document.getElementById('ape1');
    const ape2 = document.getElementById('ape2');
    let nombreRegExp = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/;

    const tlf = document.getElementById('tlf');
    let tlfRegExp = /^\d{1,3}(?:\s?\d{2}){3}$/;

    const email = document.getElementById('email');
    let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const password = document.getElementById('password');
    let passRegExp = /^(?=.*[A-Z])(?=.*\d).{8,}$/

    // Creo varias condicionales para validar los campos, en caso de que de error se almacena en el array de errores y de enfocar.
    if (!nombreRegExp.test(nombre.value)) {
        errores.push("El nombre solo puede tener letras y espacios.");
        enfocar.push(nombre);
    }

    if (!nombreRegExp.test(ape1.value)) {
        errores.push("El primer apellido solo puede tener letras y espacios.");
        enfocar.push(ape1);
    }

    if (!nombreRegExp.test(ape2.value)) {
        errores.push("El segundo apellido solo puede tener letras y espacios.");
        enfocar.push(ape2);
    }

    if (!tlfRegExp.test(tlf.value)) {
        errores.push("El teléfono no está escrito correctamente.");
        enfocar.push(tlf);
    }

    if (!emailRegExp.test(email.value)) {
        errores.push("El correo no es válido.");
        enfocar.push(email);
    }

    if (!passRegExp.test(password.value)) {
        errores.push("La contraseña debe tener 8 caracteres mínimo, un número y una mayúscula.");
        enfocar.push(password);
    }

    // Recorro el array de errores y voy almacenando el error en el mensaje de alerta que mostraré despues.
    for (let x in errores) {
        alerta += `${errores[x]}\n`;
    }

    // Si hay mínimo un error, muestro el mensaje de alerta, y le doy el foco al elemento que dió el primer error.
    if (errores.length > 0) {
        alert(alerta);
        enfocar[0].focus();
        enfocar[0].select();
        return;
    }
    // Si todo está correcto, se envía el formulario y muestro una ventana indicándolo.
    event.target.submit();
    return alert("Datos enviados correctamente.");
}

function borrarForm() {
    // Tomo todos los elementos del DOM que voy a reiniciar.
    const nombre = document.getElementById('nombre');
    const ape1 = document.getElementById('ape1');
    const ape2 = document.getElementById('ape2');
    const direccion = document.getElementById('direccion');
    const tlf = document.getElementById('tlf')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const opinion = document.getElementById('opinion');

    // Los almaceno en un array para recorrerlos y borrarlos.
    let varForm = [nombre, ape1, ape2, direccion, tlf, email, password, opinion];

    // Recorro el array y asigno su valor a vacío.
    for (let x in varForm) {
        varForm[x].value = "";
    }
}