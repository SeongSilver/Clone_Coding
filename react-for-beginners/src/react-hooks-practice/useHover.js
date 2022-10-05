import {useEffect, useState} from 'react';

const useHover = (onHover) => {
    if(typeof onHover !== "function"){
        return;
    }
    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if(element.current){
                element.current.removeEventLisstener("mouseenter", onHover);
            }
        };
    }, []);
    return element;
}

export default useHover;