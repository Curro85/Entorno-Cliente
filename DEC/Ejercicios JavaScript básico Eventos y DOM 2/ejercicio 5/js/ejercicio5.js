function addTask() {
    const entrada = document.getElementById("newTaskInput");
    const lista = document.getElementById("taskList");

    if (entrada.value == "") {
        alert("Rellene el campo");
    } else {
        let li = document.createElement("li");
        li.textContent = entrada.value;

        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.classList.add("deleteBtn");
        delBtn.onclick = function () {
            li.remove();
        }

        entrada.value = "";
        li.appendChild(delBtn);
        lista.appendChild(li);
    }
}