import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const useEffectTest = () => {
const sayHello = () => console.log("hello");

const [number, setNumber] = useState(0);
const [aNumber, setAnumber] = useState(0);
/*useEffect에는 2가지 매개변수를 받는데 첫번째는 실행될 함수, 두번째는
배열안에 useState의 변수가 들어간다. 2번째 매개변수 배열안에 담긴 변수의 값이
변할 때, 컴포넌트가 마운트 됬을 때(처음 나타났을 때),
언마운트됬을때(사라질때) 첫번째 매개변수의 함수가 실행이 된다*/
useEffect(()=>{
  sayHello();
}, [number]);

    return (
        <div className="App">
          <div>Hi</div>
            <button onClick={()=>setNumber(number+1)}>{number}</button>
            <button onClick={()=>setAnumber(aNumber+1)}>{aNumber}</button>
        </div>
    )
}

export default useEffectTest;