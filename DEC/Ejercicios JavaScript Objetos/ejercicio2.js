function isEmpty(obj) {
    contador = 0;
    for (key in obj) {
        return false;
    }
    return true;
}

const horario = {};
alert(isEmpty(horario));

horario["8:30"] = "Hora de levantarse";
alert(isEmpty(horario));