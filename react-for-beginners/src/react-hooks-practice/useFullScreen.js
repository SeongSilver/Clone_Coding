import React, {useState, useEffect, useRef} from 'react';
import Img from './uyuni.jpg'

//스크롤할때 해당 y좌표에서 무언가 바뀌게 하는 hook
const useFullScreens = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback ==="function"){
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback ==="function"){
            callback(false);
        }
    }
    return {element, triggerFull, exitFull};
}

const useFullScreen = (isFull) => {
    const onFullS = () => {
        console.log(isFull ? "We are full" : "We are small")
    }
    const {element, triggerFull, exitFull} = useFullScreens(onFullS);
    return(
        <div className="useFullScreen">
            <h1>2.6 유스풀스크린</h1>
            {/*리액트에서 create-react-app과 같이 핫 모듈 로딩을 
            제공하는 웹팩(webpack) 을 사용하는 경우 발생하는 문제이다.
            웹팩을 사용하는 경우 이미지 디렉토리와 링크하기 위해, require() 혹은 import를 사용해준다.
            jsx에서 이미지태그를 사용할 때는 url를 require() 안에 넣어주어야 한다
            require()만 사용했을 때 안될때는 객체로 인식하기 때문에 .default를 추가해준다
            */}
            <div ref={element}>
                <img src={Img}/>
                <button onClick={exitFull}>Exit FullScreen</button>
            </div>
            <button onClick={triggerFull}>Make FullScreen</button>
        </div>
    )
}

export default useFullScreen;