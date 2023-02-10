import React from "react";
import { Card } from 'semantic-ui-react'
import './style.global.css';

function SingleHour({data}){
    return <Card id="card">
    <Card.Content>

        <Card.Header className="header">{data.time.slice(11)}</Card.Header>
        <div id="status">
            <div>{data.condition.text}</div>
            <div><img src={data.condition.icon} alt="weather icon"></img></div>
        </div>
        <div className="cardContent">
            <div className="cardItem">
                <p className="propName">Temp</p>
                <p>{data.temp_c}°C</p>
            </div>

            <div className="cardItem">
                <p className="propName">Rain</p>
                <p>{data.chance_of_rain}%</p>
            </div>
        </div>
    </Card.Content>
    </Card>
}


export default function HourlyForecast({props}){
    const {forecast: {forecastday}} = props
    const day = forecastday[0].hour;

    return day.map(day => <SingleHour data={day}/>)
    
}