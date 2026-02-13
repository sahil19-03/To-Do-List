class TodoItem {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }

    render() {
        const item = document.createElement('div');
        item.className = 'todo-item';
        item.innerText = this.text;

        const completeButton = document.createElement('button');
        completeButton.innerText = this.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => this.toggleComplete();

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => this.deleteItem();

        item.appendChild(completeButton);
        item.appendChild(deleteButton);

        return item;
    }

    toggleComplete() {
        this.completed = !this.completed;
        // Logic to update the UI can be added here
    }

    deleteItem() {
        // Logic to remove the item from the list can be added here
    }
}

export default TodoItem;