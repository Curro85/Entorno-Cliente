function agregar($this) {
    let entrada = $this.previousElementSibling.value;
    if (entrada == '') {
        alert("Rellene el campo")
    } else {
        let li = document.createElement("li");
        li.textContent = entrada;

        let checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="material-icons">check</i>';
        checkBtn.classList.add("completeBtn");
        checkBtn.onclick = function () {
            alert("Buenos dias");
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = function () {
            li.remove();
        }

        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);

        itemsList.appendChild(li);
    }
}