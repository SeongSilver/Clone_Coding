//내 코드
//시간이 한자리 수일때 0표시하는거 안했음...
//아래 3항연산자 또 하나 배워갑니다 선배님덜...
// const clockTitle = document.querySelector(".js-clock");

// const ddayfunc = () => {
//     const now = new Date();
//     const christmas = new Date("2022-12-24");

//     const dday = christmas - now;

//     const ddayDay = Math.floor(dday / (1000 * 60 * 60 * 24));
//     const ddayHour = Math.floor((dday / (1000 * 60 * 60)) % 24);
//     const ddayMinute = Math.floor((dday / (1000 * 60)) % 60);
//     const ddaySecond = Math.floor((dday / 1000) % 60);

//     clockTitle.innerText = `크리스마스 이브까지 ${ddayDay}일 ${ddayHour}시 ${ddayMinute}분 ${ddaySecond}초 남았습니다.`;
// };

// ddayfunc();
// setInterval(ddayfunc, 1000);



//노마드 코드
const clockTitle = document.querySelector(".js-clock");

function getTime() {
    const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
    const now = new Date();
    // This is in milisecondsx
    const difference = new Date(xmasDay - now);
    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
    clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);
