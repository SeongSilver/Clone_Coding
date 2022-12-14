const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement('span');
    span.innerText = `🌏. ${newToDo.text}`;
    const button = document.createElement('button');
    button.innerText = `  🗑`;
    button.addEventListener("click", deleteToDos);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDosubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.pare(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}