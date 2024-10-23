let frases = [
    "El usb nunca entra a la primera.",
    "No es un bug, es una feature.",
    "Soy root, luego existo.",
    "¿Has probado a reiniciarlo?",
    "Hay 10 tipos de personas en el mundo, los que saben binario y los que no.",
    "Si un golpe lo arregla... dáselo",
    "Hoy se ha estropeado mi ratón, ya no corre en la rueda",
    "Tienes un virus en tu PC",
    "Avast antivirus",
    "No se abre el coche, tendré que probar con sudo-llaves"
];

let colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
];

function fraseAleatoria() {
    let num = Math.floor(Math.random() * frases.length);
    return frases[num];
}

function colorAleatorio() {
    let num = Math.floor(Math.random() * colores.length);
    return colores[num];
}

function fraseColor() {
    let frase = fraseAleatoria();
    document.getElementById('texto-informatica').innerHTML = frase;

    let colorTxt = colorAleatorio();
    let colorBtn = colorAleatorio();
    document.getElementById('texto-informatica').style.color = colorTxt;
    document.getElementById('ver-mas-boton').style.backgroundColor = colorBtn;
}