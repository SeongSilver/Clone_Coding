

const API_KEY = "a804062bc0fb5bcdb8ca082350e5c7c8";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL)
    .then(response=>response.json())
    .then((data)=>{
        const weather = document.querySelector(".weather span:first-child");
        const temp = document.querySelector(".weather span:nth-child(2)");
        const city = document.querySelector(".weather span:nth-child(3)");
        const country = document.querySelector(".weather span:last-child");

        weather.innerText = data.weather[0].main;
        temp.innerText = `/ ${data.main.temp}℃`;
        city.innerText = ` / ${data.name}`;
        country.innerText = data.sys.country;
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없어서 날씨를 표시할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);