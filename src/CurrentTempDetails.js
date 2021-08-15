import React, { useState } from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios";

export default function CurrentTempDetails() {
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
            <div className="CurrentTempDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-2 currentTempIcon">
                            <ReactAnimatedWeather
                                icon="CLEAR_DAY"
                                color="black"
                                size={55}
                                animate={true}
                            />
                        </div>
                        <div className="col-4">
                            <div className="row text-center">
                                <div className="col-12 currentTempDisplay">
                                    {Math.round(weatherData.temperature)}°
                                </div>
                                <div className="col-12 currentTempDescription">
                                    A {weatherData.description} day
                                </div>
                            </div>
                        </div>
                        <div className="col-6 weather-details">
                            <div className="row">
                                <div className="col-6">H: {Math.round(weatherData.maxTemperature)}° </div>
                                <div className="col-6">L: {Math.round(weatherData.minTemperature)}°</div>
                            </div>
                            <div className="row weather-details-row">
                                <div className="col-6">feels like:</div>
                                <div className="col-6">{Math.round(weatherData.feelsLike)}°</div>
                            </div>
                            <div className="row weather-details-row">
                                <div className="col-6">humidity:</div>
                                <div className="col-6">{weatherData.humidity}%</div>
                            </div>
                            <div className="row weather-details-row">
                                <div className="col-6">wind:</div>
                                <div className="col-6">{Math.round(weatherData.wind)}m/s</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "37ad42968d574bd7ca8c02bca5b2be8b";
        let city = "sydney";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}