import { Card } from 'semantic-ui-react'
import React from 'react'
import './style.global.css'
function intToDay(num){


    switch(num){
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: return null
    }
}

function SingleDay({forecast}){
    
    const d = new Date(forecast.date)
    const dayString = intToDay((d.getDay() + 1) % 7)

    return <Card id="card">
        <Card.Content>
        <Card.Header className="header">{dayString}</Card.Header>
            <Card.Meta>{forecast.date}</Card.Meta>
            <div id="status">
                <div>{forecast.day.condition.text}</div>
                <div><img src={forecast.day.condition.icon} alt="weather icon"></img></div>
            </div>
            <div className="cardContent">
                <div className="cardItem">
                    <p className="propName">Min</p>
                    <p>{forecast.day.maxtemp_c}°C</p>
                </div>

                <div className="cardItem">
                    <p className="propName">Min</p>
                    <p>{forecast.day.mintemp_c}°C</p>
                </div>
            </div>
        </Card.Content>
    </Card>
};

export default function Forecast({props}){
    const {forecast: {forecastday}} = props;
    return forecastday.map((day) => <SingleDay forecast={day}></SingleDay>)
}