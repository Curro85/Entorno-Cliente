function validacion(event) {
    event.preventDefault();

    let errores = [];
    let enfocar = [];
    let alerta = "";


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

    for (let x in errores) {
        alerta += `${errores[x]}\n`;
    }

    if (errores.length > 0) {
        alert(alerta);
        enfocar[0].focus();
        enfocar[0].select();
        return;
    }
    event.target.submit();
    return alert("Datos enviados correctamente.");
}

function borrarForm() {
    const nombre = document.getElementById('nombre');
    const ape1 = document.getElementById('ape1');
    const ape2 = document.getElementById('ape2');
    const direccion = document.getElementById('direccion');
    const tlf = document.getElementById('tlf')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const opinion = document.getElementById('opinion');

    let varForm = [nombre, ape1, ape2, direccion, tlf, email, password, opinion];

    for (let x in varForm) {
        varForm[x].value = "";
    }
}