const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     console.log(username);
    // if(username===""){
    //     alert("이름을 입력해주세요");
    // } else if(username.length>10){
    //     alert("당신의 이름은 너무 길다");
    // } 
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// const link = document.querySelector("a");

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
// }

// link.addEventListener("click", handleLinkClick);

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY ="username";
const logout = document.querySelector("#logout");


function onLoginSubmit(event){
    //preventDefault() : 어떤 이벤트의 기본행동이 일어나지 않게 막는 것 (form에서 button을 클릭시 submit되지 않게 막는 것 등)
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //===========localStorage 는 브라우저 내에 Application 하위 탭으로 해당 페이지에 정보를 저장(setItem), 불러오기(getItem), 삭제(removeItem) 등을 할 수 있다.
    //===========localStrage setItem(key, value)형식으로 key는 string 형식으로 저장
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = "안녕하세요 " + username + "님";
    //===========``(백틱) 안에 String을 사용하면 띄어쓰기도 반영하며 변수 사용시 ${변수}와 같이 사용가능=============
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// function addLogoutBtn(){
//     var setBtn = document.createElement('input');

//     setBtn.setAttribute("type", "button");
//     setBtn.setAttribute("class", "logoutBtn");
//     setBtn.setAttribute("value", "로그아웃");
    
//     greeting.appendChild(setBtn);
// }
function clickLogout(event){
    window.localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

logout.addEventListener("click", clickLogout);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    greeting.innerText ="<button>로그아웃</button>"
}else{
    //show the greeting
    paintGreetings();
}

