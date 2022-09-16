import react from 'react';

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

const main = () => {
    <div class="container">
        <section>
            <div class="clock">
                <h1 id="clockText"></h1>
            </div>
            <div class="todo">
                <form id="todo-form">
                    <input type="text" placeholder="✈ 다음에 가고 싶은 여행지" required />
                </form>
                <ul id="todo-list"></ul>
            </div>
            <div class="quote"></div>
        </section>
        <section>
            <div class="weather">
                <div class="weatherContainer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="login">
                <form id="login-form">
                    <ul class="loginList">
                        <li>
                            <span class="liContent"><label for="">FLIGHT ID</label>&emsp;</span>
                            <span class="liContent"><input type="text" /></span>
                        </li>
                        <li >
                            <button class="loginBtn"><img class="loginImg" src="img/login.png" /></button>
                        </li>
                    </ul>
                </form>
                <h1 id="greeting" class="hidden"></h1>
                <button id="logout" class="hidden loginBtn"><img class="loginImg" src="img/logout.png" /></button>
            </div>
            <div class="author"></div>
        </section>
    </div>
}

export default main;