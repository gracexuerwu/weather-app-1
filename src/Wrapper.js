import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import CurrentDay from "./CurrentDay";
import CurrentTempWrapper from "./CurrentTempWrapper";
import Week from "./Week";
import ForecastBox from "./ForecastBox";
import SunriseSunsetWrapper from "./SunriseSunsetWrapper";
import Signature from "./Signature";
import TemperatureToggle from "./TemperatureToggle";
import LocationCountry from "./LocationCountry";
import LocationCity from "./LocationCity";
import axios from "axios";



export default function Wrapper() {
    //Temperature toggle 
    function callback(temperatureUnit) {
        console.log(temperatureUnit);
    }
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        // console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            minTemperature: response.data.main.temp_min,
            maxTemperature: response.data.main.temp_max,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].main,
        });
    }
    if (weatherData.ready) {
        return (
            <div className="container">
                <div className="wrapper" id="background-element">
                    <Form />
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <LocationCountry />
                        </div>
                        <div className="col-4 temperature-toggle">
                            <TemperatureToggle toggle={true} callback={callback} />
                        </div>
                    </div>
                    <LocationCity />
                    <CurrentDay />
                    <CurrentTempWrapper weatherData={weatherData} />
                    <Week />
                    <ForecastBox />
                    <SunriseSunsetWrapper />
                    <Signature />
                </div>
            </div>
        );
    }
    else {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let city = "sydney";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}