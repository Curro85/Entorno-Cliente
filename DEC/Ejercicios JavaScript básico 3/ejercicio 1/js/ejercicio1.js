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

function fraseAleatoria() {
    let num = Math.floor(Math.random() * frases.length);
    return frases[num];
}