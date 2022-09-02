import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

const useClicks = (onClick) => {
    if(typeof onClick !== function){
        return;
    }
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []);
    return element;
}

const useClick = ()=>{
{/*useRef는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법인데
document.getElementByID()를 사용한 것과 같은
element를 searching하는 기능이다(getElementById, queySelector같은 기능)
예를들면 div태그 안에 input태그를 넣고 태그안에 property로 potato를 선언하면 
potato라는 변수로 해당 input태그를 사용할 수 있다.
*/}
    // const potato = useRef();
    // setTimeout(()=>{
    //     console.log(potato.current.focus());
    // }, 3000);
    const sayHello = () => console.log("say hello");
    {/*useClicks()를 사용해서 useRef()를 만들었고 위 useClicks에서 같은 reference(element)를 return해줬다
    그리고 주어진 reference를 title 변수에 넣어줬다(이제 상호작용 할 수 있음)
    useEffect에서 할 일은 reference안에 element.current가 있는지 if문으로 확인하는 것이다
    element.current가 있다면 click이벤트를 부여하는 것이다*/}
    const title = useClicks(sayHello);
    return(
        <div>
            <h1>useClick이여</h1>
            <h1 ref={title}>해위</h1>
        </div>
    )
}

export default useClick;

//2분 43초부터 다시