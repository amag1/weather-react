import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import ButtonController from './components/controller';
import Forecast from './components/dailyforecast';
import HourlyForecast from './components/hourlyforecast';

export default function App() {

  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  const lat = process.env.REACT_APP_LAT
  const long = process.env.REACT_APP_LONG
  const url = `https://api.weatherapi.com/v1/forecast.json?key=6b8071e3f6994744a70130027230902&q=${lat},${long}&days=5&aqi=no&alerts=no`

  const fetchData = async () => {
    return await fetch(url, {cache: 'no-cache'})
    .then(res => res.json())
  };

  useEffect(() => {
      fetchData().then(res => { 
          setData(res)})
  },[]);

  function handleClick(num){
    setCurrPage(num)
  }

  
  return (
    <div className="App">
        <h1>Weather app</h1>
        <ButtonController names={['Current','Daily Forecast','Hourly Forecast']} handler={handleClick}/>
        {data.length !== 0 && currPage === 0 && <Weather props={data} />}
        {data.length !== 0 && currPage === 1 && <Forecast props={data}/>}
        {data.length !== 0 && currPage === 2 && <HourlyForecast props={data}/>}
    </div>
  )
}
