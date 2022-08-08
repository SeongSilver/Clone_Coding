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

function onLoginSubmit(tomato){
    //preventDefault() : 어떤 이벤트의 기본행동이 일어나지 않게 막는 것 (form에서 button을 클릭시 submit되지 않게 막는 것 등)
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", handleLinkClick);