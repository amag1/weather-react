import React from 'react'


export default function WeatherData({props}){
    return <div className='weatherData'>
        <ul>
            <li>Temperature: {props.current.temp_c}°C</li>
            <li>Humidity: {props.current.humidity}%</li>
            <li>Wind: {props.current.wind_kph} kph</li>
        </ul>
    </div>
        
}