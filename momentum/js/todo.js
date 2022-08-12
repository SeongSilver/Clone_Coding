const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

//변수 선언 방식을 let으로 한 것은 해당 배열의 내용을 바꿀 수 있게 하기 위함
let toDos = [];

//localStorage에 Key 값으로 TODOS_KEY를 Value에는 toDos배열을 
//JSON.stringify()를 사용해 문자열로 바꿔서 저장한다(localStorage는 문자열만 저장가능)
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//deleteToDo에 들어온 매개변수의 부모노드를 찾아서 해당 부모노드를 삭제하는 기능
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

//li안에 span, button 태그를 만들고 button태그에 휴지통 이모지를 추가한후 버튼에 삭제를 위한 deleteToDo 메서드 이벤트를 추가
//span 태그에는 매개변수값과 텍스트를 같이 innerText로 추가하고 li 뒤에 갖다 붙인다.
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText =`TODO LIST : ${newToDo.text}`;
    const button = document.createElement("button");
    button.innerText = ` 🗑`;
    button.addEventListener("click", deleteToDo )
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//46번줄에서 클릭 이벤트로 이 메서드를 실행시키게 하지만 submit 할 때 기본동작을 preventDefault로 막아주고
//해당 폼 input 태그에 들어오는 값을 newToDo변수에 담은 후 비워준다
//담겨진 newToDo를 toDos 배열에 push()메서드를 사용하여 추가해주고
//paintToDo 함수를 사용해서 li를 추가해주고 saveToDo메서드를 사용해 localStorage에 저장
function handleToDoSubmit(event){
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

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에 저장된 Key변수를 불러오는 getItem을 savedToDos 변수에 저장
const savedToDos = localStorage.getItem(TODOS_KEY);

//localStorage에 저장된 값이 있을 때 저장된 key의 value를 JSON.parse()를 통해 배열의 형식으로 가져옴
//toDos배열에 해당 value값을 추가해준다(배열의 변수형식이 let이기에 추가 가능)
//forEach()메서드를 이용해서 배열의 값을 li태그로 반복해서 만들어준다
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행
    // parsedToDos.forEach((item) => console.log(`할일! ${item}`));
    parsedToDos.forEach(paintToDo);
}

//Arrays.filter() 메서드는 원하는 배열의 요소들을 뽑아서 새로운 배열을 만든다
function sexyFilter(){
    
}