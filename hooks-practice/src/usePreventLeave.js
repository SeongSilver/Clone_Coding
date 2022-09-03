import React, {useState, useEffect, useRef} from 'react';

const usePreventLeaves = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue="ㅇㅇㅇㅇㅇㅇㅇㅇ";
    }
    const enablePrevent = () =>{
        //beforeunload는 window가 닫히기전 함수 실행시키는 것을 허락한다
        //beforeunload는 retrunValue를 요구한다
        window.addEventListener("beforeunload", listener);
    }
    const disaablePrevent = () =>{
        window.addEventListener("beforeunload", listener);
    }
    return {enablePrevent, disaablePrevent};
}

const usePreventLeave = () => {
    const {enablePrevent, disaablePrevent} = usePreventLeaves();
    return(
        <div className="usePreventLeave">
            <h1>유스프리벤트리브즈</h1>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disaablePrevent}>Unprotect</button>
        </div>
    )
}

export default usePreventLeave;