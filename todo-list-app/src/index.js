const TodoList = require('./components/TodoList');
const TodoForm = require('./components/TodoForm');
const storage = require('./utils/storage');

class App {
    constructor() {
        this.todoList = new TodoList();
        this.todoForm = new TodoForm(this.addTodo.bind(this));
        this.loadTodos();
        this.render();
    }

    loadTodos() {
        const todos = storage.getTodos();
        todos.forEach(todo => this.todoList.addTodo(todo));
    }

    addTodo(todo) {
        this.todoList.addTodo(todo);
        storage.saveTodos(this.todoList.getTodos());
        this.render();
    }

    render() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = '';
        appContainer.appendChild(this.todoForm.render());
        appContainer.appendChild(this.todoList.render());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});