const input = document.querySelector("#input")
const btnCreateTask = document.querySelector(".createTask")
const list = document.querySelector(".todoList")

const createTask = () => {
    if (!input.value.trim()) {
        return false
    } else {
        const div = document.createElement("div")
        const text = document.createElement("h3")

        const divBtns = document.createElement("div")
        const btnEdit = document.createElement("button")
        const btnRemove = document.createElement("button")

        div.setAttribute("class", "block_text")
        divBtns.setAttribute("class", "buttons")
        btnEdit.setAttribute("class", "btn_edit")
        btnRemove.setAttribute("class", "btn_remove")

        btnEdit.innerHTML = "edit"
        btnRemove.innerHTML = "remove"
        text.innerHTML = input.value.trim()

        divBtns.append(btnEdit)
        divBtns.append(btnRemove)

        div.append(text)
        div.append(divBtns)

        list.prepend(div)

        btnEdit.onclick = () => {
            let buffer = prompt("Редачить", text.innerHTML).trim()
            if (buffer !== "") text.innerHTML = buffer
        }
        btnRemove.onclick = () => div.remove()

        input.value = null
    }
}

btnCreateTask.addEventListener("click", createTask)
window.addEventListener("keydown", e => {
    if (e.code === "Enter") createTask()
})