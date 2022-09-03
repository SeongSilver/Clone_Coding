import React, {useState, useEffect, useRef} from 'react';

const useBeforeLeaves = (onBefore) => {

    const handle = (event) =>{
        const {clientY} = event;
        if(clientY <= 0){
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return() => document.removeEventListener("mouseleave", handle);
    },[]);
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return() => document.removeEventListener("mouseleave", handle);
    },[]);
    /* hook은 문서의 최상단에, 어떠한 값이 return 되기 전에 정의되어야 
    하기 때문에, 이전 코드처럼 hook을 사용하기 전에 조건문으로 return 하는
    코드가 있으면 에러가 발생하게 되는 것이다. 그래서 return 하는 if문 내림*/
    if(typeof onBefore !=="function"){
        return;
    }
}

//기본적으로 탭을 닫을때 실행되는 함수
const useBeforeLeave = () => {
    const begForLilfe = () => console.log("나가지마!");
    useBeforeLeaves(begForLilfe);
    return(
        <div className="usePageLeave">
            <h1>2.4유스페이지리브즈</h1>
            <h1>해위</h1>
            <br/>
        </div>
    )
}

export default useBeforeLeave;