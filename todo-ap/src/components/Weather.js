import React, { useEffect, useState } from 'react'
import { WiDayCloudy, WiDaySunny, WiDayRain, WiDaySnow } from 'react-icons/wi'
import './Weather.css';

function Weather() {
    const [weather, setWeather] = useState(null);
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            getWeatherCurrentLocation(lat, lng);

        })
    }
    const getWeatherCurrentLocation = async (lat, lng) => {
        const API_KEY = "a804062bc0fb5bcdb8ca082350e5c7c8";
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
        // const [temp, setTemp] = useState("");
        // const [location, setLocation] = useState("");
        let response = await fetch(URL)
        let data = await response.json();
        console.log(data);
        setWeather(data);
    }
    useEffect(() => {
        getCurrentLocation();
    }, [])
    return (
        <div className='weather'>
            <div className='weatherTitle'>MOMENTUM</div>
            {
                weather !== null && (
                    <div className='weatherText'>
                        {weather.name}. {weather.sys.country}&emsp;/&emsp;{weather.weather[0].main}&emsp;/&emsp;{weather.main.temp}℃
                    </div>
                )
            }
        </div>
    )
}

export default Weather