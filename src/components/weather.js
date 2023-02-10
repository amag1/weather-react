import React from "react";
import { Card } from 'semantic-ui-react'
import './style.global.css'

function Weather({props}) {
    return <Card className='singleCard' id="card">
        <Card.Content>
            <Card.Header className="header">{props.location.name}</Card.Header>
            <div id="status">
                <div>{props.current.condition.text}</div>
                <div><img src={props.current.condition.icon} alt="weather icon"></img></div>
            </div>
            <div className="cardContent">
                <div className="cardItem">
                    <p className="propName">Temp</p>
                    <p>{props.current.temp_c}°C</p>
                </div>

                <div className="cardItem">
                    <p className="propName">Humidity</p>
                    <p>{props.current.humidity}%</p>
                </div>

                <div className="cardItem">
                    <p className="propName">UV</p>
                    <p>{props.current.uv}</p>
                </div>

                <div className="cardItem">
                    <p className="propName">Wind</p>
                    <p>{props.current.wind_kph} km/h</p>
                </div>
            </div>
        </Card.Content>
    </Card>
}

export default Weather