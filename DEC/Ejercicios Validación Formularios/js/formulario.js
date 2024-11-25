document.addEventListener('DOMContentLoaded', aceptarCond);
function generarSuma() {
    const label = document.getElementById('labelSuma');
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    console.log(label);

    let labelContent = `${num1} + ${num2} = ?`;
    label.innerHTML = labelContent;

    return num1 + num2
}

function aceptarCond() {
    const checkbox = document.getElementById('condiciones');
    console.log(checkbox)
    checkbox.addEventListener('change', function () {
        const btn = document.getElementById('btnSubmit').getAttribute;
    })
}