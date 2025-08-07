
const addBtn = document.querySelector(".add-btn");
const todosInput = document.querySelector(".todoinput");

function handleAddItem() {
    let todosInputValue = todosInput.value;
    const todos = document.querySelector(".todos");

    const todoItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const todoText = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    checkBox.type = "checkbox";

    todoText.textContent = todosInputValue;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);

    todos.appendChild(todoItem);

    todosInput.value = "";

    checkBox.addEventListener("change", () => {
        todoItem.classList.toggle("completed");
    })

    editBtn.addEventListener("click", () => {
        const currentInputText = todoText.textContent;
        const newInputText = document.createElement("input");
        newInputText.value = currentInputText;

        todoItem.replaceChild(newInputText, todoText);

        newInputText.focus();

        newInputText.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                todoText.textContent = newInputText.value;
                todoItem.replaceChild(todoText, newInputText);
            }
        })
    })

    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
    })

}

addBtn.addEventListener("click", handleAddItem);
todosInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleAddItem();
    }
})