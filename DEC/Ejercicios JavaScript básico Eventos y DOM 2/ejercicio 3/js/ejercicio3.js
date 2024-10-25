function agregar() {
    let entrada = document.getElementById('newItemInput');
    if (entrada.value == '') {
        alert("Rellene el campo")
    } else {
        let li = document.createElement("li");
        li.textContent = entrada.value;

        let checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="material-icons">check</i>';
        checkBtn.classList.add("completeBtn");
        checkBtn.onclick = function () {
            if (li.classList.contains("completed")) {
                li.style.textDecoration = "none";
                li.style.color = "black";
                li.classList.remove("completed");
            } else {
                li.style.textDecoration = "line-through";
                li.style.color = "#999";
                li.classList.add("completed");
            }
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = function () {
            li.remove();
        }

        entrada.value = "";
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);

        itemsList.appendChild(li);
    }
}