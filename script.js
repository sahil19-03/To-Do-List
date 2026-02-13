//select DOM inputs
const input =document.getElementById("todo-input");
const addBtn =document.getElementById("add-btn");
const list =document.getElementById("todo-list");

//try to load saved data from local storage (if any)
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

function savedToDos(){
    //save current saved todos array to local storage
    localStorage.setItem('todos',JSON.stringify(todos));
}
 
//create a dom node for a todo object and append it to the list
function createToDoNode(todo,index){
    const li = document.createElement('li');

    //checkbox to toggle completion
    const checkbox= document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;  // !! -> boolean equvalent value to exact boolean value
    checkbox.addEventListener ("change", () =>{
        todo.completed = checkbox.checked;

        //visual feedback :strike- through when completed 
    savedToDos();
    })

    //Text of todo 
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = '0 8px';

    if( todo.completed){
       textSpan.style.textDecoration = 'line-through'
    }

       //Add double-click event listener to edit todo
        textSpan.addEventListener("dblclick", () =>{
            const newtext = prompt("Edit todo", todo.text);
            if(newtext != null){
                todo.text = newText.trim();
                textSpan.textContent = todo.text;
                savedToDos();
            }
        })

        //Delete todo button
        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.addEventListener('click', () =>{
            todos.splice(index,1);  //remove one element from index
            render();
            savedToDos();
        })
        
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(delBtn);
        return li
       
    }
    

//Render the whole todo list from todos array
function render(){
    list.innerHTML = '';

    //Recreate each item
    todos.forEach((todo,index) => {
        const node = createToDoNode(todo,index);
        list.appendChild(node);
    });
}

function addToDo() {
    const text = input.value.trim();
    if(!text){
        return 
    }

    //push a new todo object
    todos.push({text,completed : false});
    input.value ='';
    render();
    savedToDos();
}

addBtn.addEventListener("click" , addToDo);
input.addEventListener('keydown',(e) =>{
    if(e.key == 'Enter'){
        addToDo();
    }
})
render();