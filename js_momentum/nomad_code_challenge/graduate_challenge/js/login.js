const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#loginBtn");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY ="username";
const logout = document.querySelector("#logout");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`FLIGHT ID : ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function clickLogout(event){
    window.localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

logout.addEventListener('click', clickLogout);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    greeting.innerText ="<button>로그아웃</button>"
}