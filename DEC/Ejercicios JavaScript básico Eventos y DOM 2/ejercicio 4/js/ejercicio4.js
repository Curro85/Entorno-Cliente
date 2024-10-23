function toggleBox() {
    const caja = document.getElementById('box');
    const boton = document.getElementById('toggleBtn');

    boton.onclick = function () {

        if (boton.textContent == "Ocultar Caja") {
            caja.style.display = "none";
            boton.textContent = "Mostrar Caja";
        } else {
            caja.style.display = "block";
            boton.textContent = "Ocultar Caja";
        }
    };
}   