class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    displayTodos() {
        return this.todos.map(todo => todo.render()).join('');
    }
}

export default TodoList;