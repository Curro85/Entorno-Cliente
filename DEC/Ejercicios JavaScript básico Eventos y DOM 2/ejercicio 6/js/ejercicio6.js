let nombres = []

function agregar() {
    const entrada = document.getElementById("inputName");
    const lista = document.getElementById("nameList");
    if (entrada.value == "") {
        alert("Rellene el campo con un nombre");
    } else {
        let li = document.createElement("li");
        li.textContent = entrada.value;

        nombres.push(entrada.value);

        entrada.value = "";
        lista.appendChild(li);
    }
}

function select() {
    if (nombres.length == 0) {
        alert("Agregue nombres a la lista")
    } else {
        const numAleatorio = Math.floor(Math.random() * nombres.length);
        const lista = document.getElementById("nameList");
        const elementos = lista.getElementsByTagName("li");
        // Elimino la clase selected para quitar el fondo amarillo
        for (let x of elementos) {
            let vacio = x.innerText.split(", El ganador es:")[0];
            x.innerText = vacio;
            x.classList.remove("selected");
        }
        // Añado fondo amarillo y mensaje segun el elemento seleccionado
        let mensaje = `, El ganador es: ${elementos[numAleatorio].innerText}`;
        elementos[numAleatorio].classList.add("selected");
        elementos[numAleatorio].innerHTML += mensaje;
    }

}