import React, {useState, useEffect, useRef} from 'react';

//스크롤할때 해당 y좌표에서 무언가 바뀌게 하는 hook
const useScrolls = () => {
    const [state, setState] = useState({
        x:0,
        y:0
    });
    const onScroll = () => {
        setState({y:window.scrollY, x:window.scrollx});
        console.log(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
}

const useScroll = () => {
    const {y} = useScrolls();
    return(
        <div className="useScroll" style={{height:"1000vh"}}>
            <h1>2.6 유스스크롤</h1>
            <h2 style={{position:"fixed", color:y>100?"red":"blue"}}>하이</h2>
        </div>
    )
}

export default useScroll;