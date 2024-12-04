function validacion() {
    const nombre = document.getElementById('nombre').value;
    const ape1 = document.getElementById('ape1').value;
    const ape2 = document.getElementById('ape2').value;

    const tlf = document.getElementById('tlf').value;
    let tlfRegExp = /^\d{9}$/;

    const password = document.getElementById('password').value;

    if(!tlfRegExp.test(tlf)) {
        alert("El teléfono está chungo");
    }
}