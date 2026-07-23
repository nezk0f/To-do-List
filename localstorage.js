let todos = []

function addTodoToStorage(newTodo) {
    getTodosFromStorage()
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function getTodosFromStorage() {
    if(localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}

function removeTodoFromStorage(removeTodo) {
    getTodosFromStorage()
    
    const index = todos.findIndex(function(todo) {
        return todo === removeTodo
    })

    if(index != -1) {
        todos.splice(index,1)
    }
    localStorage.setItem("todos",JSON.stringify(todos))
}

function clearAllTodosFromStorage() {
    todos = []
    localStorage.setItem("todos", JSON.stringify(todos))
}
