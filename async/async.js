//async & await
//깔끔하게 프로미스를 사용할 수 있는 방법

//########1. async
//promise를 작성하지 않고도 비동기를 사용하는 방법

/*기존의 promise사용법 */
// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         resolve('ellie');
//     })
//     //do network request in 10 secs....
//     return 'ellie';
// }

//async 사용법
//함수 앞에 async를 사용하게 되면 해당 코드블록이 자동으로 promise로 바뀐다
async function fetchUser(){
    return 'ellieasdfasdfasdf';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//####### 2. await
//await는 async가 붙은 함수에서만 쓸 수 있다

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    //await은 delay가 끝나기 전까지 기다려주는 역할
    await delay(2000);
    return '🍎';
}

async function getBanana(){
    await delay(1500);
    return '🍌';
}

//프로미스도 중첩적으로 사용하면 콜백지옥과 같은 효과가 나타난다
function pickFruits(){
    return getApple()
    .then(apple=>{
        return getBanana()
        .then(banana=> `${apple} + ${banana}`);
    });
}

//위 코드를 async await를 사용하면 아래와 같이 바꿀 수 있다
async function pickFruit(){
    //★★★★★★★★★async 병렬처리
    //getApple이 2초, getBanana가 2초가 걸리므로 총 4초가 걸리는데
    //getApple과 getBanana를 변수에 담아 프로미스를 만들고 'await 프로미스'로 실행하면 
    //각각 병렬적으로 실행되어 총 4초가 아니라 2초가 걸리게 된다
    
    // //병렬x
    // const apple = await getApple();
    // const banana = await getBanana();
    // return `async await 를 사용한 코드 ${apple} + ${banana}`
    
    //병렬o
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple2 = await applePromise;
    const banana2 = await bananaPromise;
    return `async await 를 사용한 코드 ${apple2} + ${banana2}`;
}



// pickFruits().then(console.log);
pickFruit().then(console.log);


//############# 3. 유용한 Promise APIs
//promise에 있는 all API를 사용하면 all([])안에 프로미스 배열을 전달하게 되면
//모든 프로미스들이 병렬적으로 다 받을 때까지 모아주는 역할을 한다
//배열 형태로 겟애플, 겟바나나의 프로미스배열을 전달하게 되면 다 받아질 때 다 받아진 배열이 전달 된다
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    //race() : 어떤 것이든 상관없이 promise배열 중 먼저 값을 리턴하는 것만 전달하고 싶을 때 사용
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);