# To-Do List Application

This is a simple To-Do List application built with JavaScript. It allows users to create, manage, and store their to-do items in the browser's local storage.

## Features

- Add new to-do items
- Mark items as completed
- Delete to-do items
- Persist data using local storage

## Project Structure

```
todo-list-app
├── src
│   ├── index.js          # Entry point of the application
│   ├── components
│   │   ├── TodoItem.js   # Represents a single to-do item
│   │   ├── TodoList.js    # Manages a list of to-do items
│   │   └── TodoForm.js    # Handles input for new to-do items
│   ├── styles
│   │   └── main.css       # Styles for the application
│   └── utils
│       └── storage.js     # Functions for managing local storage
├── index.html             # Main HTML file
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `index.html` in your web browser.
2. Use the input field to add new to-do items.
3. Click on items to mark them as completed or delete them.

## License

This project is licensed under the MIT License.