import React from "react"

const clock = () => {

    const clocks = document.querySelector('#clockText');

    function getClock() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        clocks.innerText = `${hours} : ${minutes} : ${seconds}`;
    }

    getClock();
    setInterval(getClock, 1000);

    return(
        <>
            <h1 id="clockText"></h1>
        </>
    )
}

export default clock;