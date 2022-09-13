import React, {useState, useEffect} from 'react';

// const clocks = document.querySelector('#cd');

// function getClock() {
    //     const date = new Date();
    //     const hours = String(date.getHours()).padStart(2, "0");
    //     const minutes = String(date.getMinutes()).padStart(2, "0");
    //     const seconds = String(date.getSeconds()).padStart(2, "0");
    
    //     clocks.innerText = hours + " : " + minutes + " : " + seconds;
    // }
    // getClock();
    // setInterval(getClock, 1000);
    
    const clock = () => {
        const [time, setTime] = useState(new Date());
        
        useEffect(()=>{
            const id = setInterval(()=>{
                setTime(new Date());
            },1000);
            return (()=>clearInterval(id))
        }, []);
    return(
        <>
            <h1 id="clockText">Clock</h1>
            <span>{time.toLocaleDateString()}</span>
        </>
    )
}

export default clock;