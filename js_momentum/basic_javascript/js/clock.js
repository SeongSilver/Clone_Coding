const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

//setInterval(함수, millisecond) : 정해진 시간 마다 해당 작업을 반복하는 함수
// setInterval(sayHello, 2000);

//setTimeout(함수, millisecond) : 정해진 ms이 지난 후 실행하는 타이머를 설정

getClock(); //사이트가 로드 되자마자 시계를 실행시키기 위해서 setInterval 앞에 먼저 이 함수를 실행
setInterval(getClock, 1000);

//대상변수, 글자열.padStart(원하는 길이, 채울 문자) : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열 반환(좌측부터 적용)
//"1",padStart(2, "0");
//padEnd() : 현재 문자열의 끝을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열 반환(우측부터)