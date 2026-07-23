const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoInput")
const todoList = document.querySelector(".todoList")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const searchInput = document.querySelector("#todoSearch")
const clearButton = document.querySelector("#clearbtn")

runEvents()

function runEvents() {
    form.addEventListener("submit",addTodo)
    document.addEventListener("DOMContentLoaded",pageLoaded)
    secondCardBody.addEventListener("click",removeTodo)
    searchInput.addEventListener("keyup",filterTodo)
    clearButton.addEventListener("click",clearAllTodos)

}

function clearAllTodos() {
    const allTodo = document.querySelectorAll(".list-group-item")
    if(allTodo.length>0) {
        allTodo.forEach(function(todo) {
            todo.remove()
        })

        clearAllTodosFromStorage()
    }
}

function filterTodo(e) {
    filterValue = e.target.value.toLowerCase().trim()
    allTodo = document.querySelectorAll(".list-group-item")

    allTodo.forEach(function(todo) {
        if(todo.textContent.toLowerCase().trim().includes(filterValue)) {
            todo.setAttribute("style","display : block")
        }
        else {
            todo.setAttribute("style","display : none !important")
        }
    })
}

function removeTodo(e) {
    if(e.target.className === "fa fa-remove") {
        const todo = e.target.parentElement.parentElement
        todo.remove()

        removeTodoFromStorage(todo.textContent)
    }
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between"
    li.textContent = newTodo
    
    const a = document.createElement("a")
    a.href = "#"
    a.className = "delete-item"

    const i = document.createElement("i")
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)
    todoList.appendChild(li)

    addInput.value = ""
}

function showAlert(type,message) {
    const div = document.createElement("div")
    div.className = `alert alert-${type} mt-3`
    div.textContent = message
    firstCardBody.appendChild(div)

    setTimeout(function() {
        div.remove()
    },3000)
}