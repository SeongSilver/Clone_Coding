const h1 = document.querySelector(".hello h1");

document.body.style.backgroundColor="beige";
// console.dir(h1);

// h1.addEventListener("click", function(){
//     console.log("클릭 이벤트다ㅏㅏㅏㅏㅏㅏ");
// })

// h1.onresize = function(){
//     document.body.style.backgroundColor = "skyblue";
// };

// window.addEventListener("resize", function(){
//     document.body.style.backgroundColor="green";
//     h1.style.color = "white";
// });

//=============자바스클비트로 색깔바꾸기
// function handleTitleClick(){
//     // h1.innerText = "바뀌는거다 자바스크립트로ㅗㅗㅗ";
//     const currentColor=h1.style.color;    
//     let newColor;
//     if(currentColor==="blue"){
//         newColor="red";
//     } else{
//         newColor="blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

//============className으로 CSS바꾸기
// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.className===clickedClass){
//         h1.className="";
//     } else{
//         h1.className=clickedClass;
//     }
// }
// h1.addEventListener("click", handleTitleClick)

//=========classList 사용해보기 add 추가 remove 삭제 contains()내용이 포함되어 있는지 확인
// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else{
//         h1.classList.add(clickedClass);
//     }

// }
// h1.addEventListener("click", handleTitleClick)


//============classList.toggle("원하는 클래스이름") : 해당 html 태그에 classList에 원하는 클래스 이름이 있다면 제거하고 클래스 이름이 없다면 추가해주는 기능
//============스위치, 버튼의 역할
//============If force is not given, "toggles" token, removing it if it's present and adding it if it's not present.
function clickToggle(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", clickToggle);