export const saveToDoItems = (items) => {
    localStorage.setItem('todoItems', JSON.stringify(items));
};

export const getToDoItems = () => {
    const items = localStorage.getItem('todoItems');
    return items ? JSON.parse(items) : [];
};

export const clearToDoItems = () => {
    localStorage.removeItem('todoItems');
};