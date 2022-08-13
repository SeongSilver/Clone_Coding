const API_KEY = "a804062bc0fb5bcdb8ca082350e5c7c8";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log(`당신이 살고있는 위도는 ${lat}이고 경도는 ${lng}입니다.`);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // console.log(URL);
    fetch(URL)
    .then(response => response
        .json()).then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:nth-child(3)");
            const country = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            temp.innerText = `/ ${data.main.temp}℃`;
            city.innerText = ` / ${data.name}`;
            country.innerText = data.sys.country;
        });;
}
function onGeoError(){
    alert("위치를 찾을 수 없어서 날씨를 표시할 수 없습니다.");
}

//geoLocation
//navigator : user의 위치를 가져옴(wifi, gps등)
//브라우저에서 위치 좌표를 가져옴
//getCurrentPosition(실행이 잘됬을 때 실행될 함수, 에러가 생길 때 실행될 함수)은 2개의 매개변수를 가짐
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// {"coord":{"lon":127.2897,"lat":37.6571},
// "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
// "base":"stations",
// "main":{"temp":23.72,"feels_like":24.68,"temp_min":22.94,"temp_max":24.75,"pressure":1007,"humidity":97,"sea_level":1007,"grnd_level":992},
// "visibility":10000,
// "wind":{"speed":0.66,"deg":134,"gust":0.76},
// "clouds":{"all":87},"dt":1660399707,
// "sys":{"type":1,"id":5509,"country":"KR","sunrise":1660337065,"sunset":1660386442},
// "timezone":32400,"id":1897118,"name":"Hwado","cod":200}