'use strict';

//자바스크립는 동기적인 언어다
//호이스팅된 이후부터 우리가 적은 코드의 순서에 맞춰서 하나씩 동기적으로 실행된다는말
//호이스팅 : var변수, function 선언들이 자동적으로 제일 위로 올라가는 것
//호이스팅이 된 이후부터 코드가 나타나는 순서대로 실행이 된다
//sync(동기)는 정해진 순서대로 코드가 실행되는 것이고 async(비동기)는 언제 코드가 실행될지 예측할 수 없는 것

console.log('1');
/**지정한 시간이 지나면 우리가 전달한 콜백함수를 호출하도록 하는 함수*/
//비동기적 실행 방법 중 하나 setTimeout()
setTimeout(() =>  {
    console.log('2');
}, 1000);
console.log('3');

//동기 콜백함수
function printImmediately(print){
    print();
}
printImmediately(() => console.log('동기 콜백'));

//비동기 콜백함수
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log("비동기 콜백"), 2000);

//콜백 지옥 예제
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({ name : 'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
        user, 
        userWidhRole => {
            alert(`hello ${userWidhRole.name}, you have a ${userWidhRole.role} role`);
        },
        error => {
            console.log(error);
        });
    }, 
    error => { console.log(error) });