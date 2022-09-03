import React, {useState, useEffect, useRef} from 'react';

const useFadeIns = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    },[])
    if(typeof duration !== 'number' || typeof delay !== 'number'){
        return;
    }
    return {ref: element, style:{opacity:0}};
}

const useFadeIn = () => {
    const fadeInH2 = useFadeIns(1, 2);
    const fadeInP = useFadeIns(5, 10);
    return(
        <div className="useFadeIn">
            <h1>2.5 유스페이드 인</h1>
            <h2 {...fadeInH2}>Hello</h2>
            <p {...fadeInP}>lorem ipsum lalalalal</p>
            <br/>
        </div>
    )
}

export default useFadeIn;