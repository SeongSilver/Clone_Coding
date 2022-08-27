'use strict';

//Promise is a JavaScript object for asynchronous operation. 
//프로미스는 비동기를 수행할 때 콜백함수 대신 유용하게 사용된다
//프로미스의 2가지 포인트
//#############1. state(상태) 
//프로세스가 무거운 헤비한 오퍼레이션을 수행하고 있는 중인지 아니면 수행이 거의다 완료되어서 성공했는지 실패했는지
//프로미스의 상태는 프로미스가 만들어져서 우리가 지정한 오퍼레이션이 수행 중일때는 pending 상태
//오퍼레이션을 성공적으로 다 끝내면 fulfilled 상태
//파일을 찾을 수가 없거나 네트워크에 문제가 생기면 rejected상태가 된다

//###############2. 프로듀스와 컨슈머의 차이점을 아는 것
//프로미스에는 우리가 원하는 데이터를 프로듀싱(제공) 하는 사람과 producer(promise object)와 
//제공된 데이터를 쓰는 사람, 소비하는 consumer로 나뉜다. 이 두 다른 견해를 이해하는 것이 중요

//#######2.1 Producer
//promise는 클래스이기 떄문에 new를 사용해 오브젝트를 생성한다
//프로미스의 생성자에는 콜백함수를 전달하는데 이 콜백함수는 기능을 정상적으로 수행해 마지막에 최종 데이터를 전달하는 함수와 오류가 날때 사용될 함수를 받는다

//새로운 프로미스가 만들어질 때는 우리가 전달한 executor 함수가 자동적으로 실행된다
const promise = new Promise((resolve, reject) => {
    //프로미스안에서 헤비한 일들을 한다 
    //네트워크에서 데이터를 받거나 파일에서 큰 데이터를 읽어오는 것을 동기적으로 처리하면 그 다음라인의 코드가 실행되지 않기 때문에 비동기적으로 처리한다
    console.log('doing something...');
    setTimeout(()=>{
        // resolve('ellie')
        reject(new Error('no network'));
    }, 2000);
});

//#######2.2 Consumer : then, catch, finally
//value라는 매개변수는 프로미스가 정상적으로 잘 수행이 되어서 마지막으로 리졸브 콜백 함수에서 전달된 'ellie'라는 값이 들어온다

promise.then((value)=>{
    console.log(value);
})
//에러가 발생했을 떄 어떻게 처리할 것인지 catch안에서 콜백함수를 등록해주면 된다
.catch((error)=>{
    console.log(error);
})
//finally()성공하든 실패하든 상관없이 마지막에 호출되어지는 것
.finally(()=>{
    console.log('finally');
})

//############3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(123), 1000);
})

//then()은 값을 바로 전달할 수도 있고 아니면 프로미스를 전달해도 된다
//최종적으로 출력되는데까지 걸리는 시간은 setTimeout에 설정한 시간대로 실행된다.
fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, result)=>{
        setTimeout(()=>resolve(num-1), 1000);
    });
})
.then(num=>console.log(num));

//######4.Error handling
const getHen = () => 
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐓'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject)=>{
        setTimeout(()=>reject(new Error(`error ${hen} => 🥚`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));

//위 콜백함수를 전달할 떄 받아오는 value를 닿은 함수로 바로 하나를 호출하는 경우에는 아래와 같이 가능하다
//이 프로미스에서 발생하는 에러를 잡고 싶을때는 바로 다음에 .catch()를 작성하면 바로 문제를 해결할 수 있다.
getHen()
.then(getEgg)
.catch(error => {
    return '🍞';
})
.then(cook)
.then(console.log)
.catch(console.log);

//############ 5. 
