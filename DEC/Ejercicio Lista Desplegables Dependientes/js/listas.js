document.addEventListener('DOMContentLoaded', function () {
    listarProv();
})

let andalucia = {
    provincias: ['Cadiz', 'Malaga', 'Huelva', 'Sevilla', 'Almeria', 'Cordoba', 'Jaen', 'Granada'],
    municipios: [
        ['Cadiz', 'Chiclana de la Frontera', 'El Puerto de Santa Maria', 'Jerez de la Frontera', 'Olvera'],
        ['Antequera', 'Estepona', 'Malaga', 'Marbella', 'Torremolinos'],
        ['Berrocal', 'Campofrío', 'Huelva', 'Isla Cristina', 'Palos de la Frontera'],
        ['Alcala de Guadaira', 'Dos Hermanas', 'Lebrija', 'Sevilla', 'Utrera'],
        ['Almeria', 'Balanegra', 'Los Gallardos', 'Paterna del Rio', 'Tabernas'],
        ['Adamuz', 'Baena', 'Cabra', 'Cordoba', 'Fuente Obejuna'],
        ['Andujar', 'Baeza', 'Jaen', 'Linares', 'Vilches'],
        ['Armilla', 'Beas de Guadix', 'Calahorra', 'Granada', 'Motril']]
}

let provinciaSelect = document.getElementById('provincias');
let municipioSelect = document.getElementById('municipios');

function listarProv() {
    for (let i = 0; i < andalucia.provincias.length; i++) {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', andalucia.provincias[i]);
        opcion.innerText = andalucia.provincias[i];

        provinciaSelect.appendChild(opcion);
    }
}

function listarMun() {
    let provincia = indiceProvincia();
    municipioSelect.innerHTML = '';

    for (let i = 0; i < andalucia.municipios[provincia].length; i++) {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', andalucia.municipios[provincia][i]);
        opcion.innerText = andalucia.municipios[provincia][i];

        municipioSelect.appendChild(opcion);
    }
    municipioSelect.disabled = false;
}

function indiceProvincia() {
    switch (provinciaSelect.value) {
        case 'Cadiz':
            return 0;
        case 'Malaga':
            return 1;
        case 'Huelva':
            return 2;
        case 'Sevilla':
            return 3;
        case 'Almeria':
            return 4;
        case 'Cordoba':
            return 5;
        case 'Jaen':
            return 6;
        case 'Granada':
            return 7;
    }
}

function enviar() {
    if (provinciaSelect.value === 'provincias') {
        provinciaSelect.focus();
        return;
    }

    return alert(`Su provincia es ${provinciaSelect.value} y su municipio es ${municipioSelect.value}`);
}