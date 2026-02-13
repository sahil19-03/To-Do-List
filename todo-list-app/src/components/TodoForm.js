class TodoForm {
    constructor(onSubmit) {
        this.onSubmit = onSubmit;
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add a new to-do item';
        this.submitButton = document.createElement('button');
        this.submitButton.textContent = 'Add';

        this.form.appendChild(this.input);
        this.form.appendChild(this.submitButton);
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const value = this.input.value.trim();
        if (value) {
            this.onSubmit(value);
            this.input.value = '';
        }
    }

    render() {
        return this.form;
    }
}

export default TodoForm;