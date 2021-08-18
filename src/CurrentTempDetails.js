import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";



export default function CurrentTempDetails(props) {

    function convertCelsiusToFahrenheitFormular(temperatureInCelsius, temperatureUnit) {
        if (temperatureUnit) {
            return Math.round(temperatureInCelsius);
        }
        else {
            return Math.round((temperatureInCelsius * 9 / 5) + 32);
        }
    }

    return (
        <div className="CurrentTempDetails">
            <div className="container CurrentTempWrapper">
                <div className="row">
                    <div className="col-2 currentTempIcon">
                        <WeatherIcon code={props.weatherData.icon} />
                    </div>
                    <div className="col-4">
                        <div className="row text-center">
                            <div className="col-12 currentTempDisplay">
                                {convertCelsiusToFahrenheitFormular(props.weatherData.temperature, props.temperatureUnit)}°
                            </div>
                            <div className="col-12 currentTempDescription text-capitalize">
                                {props.weatherData.description}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 weather-details">
                        <div className="row weather-details-row">
                            <div className="col-6">H: {convertCelsiusToFahrenheitFormular(props.weatherData.maxTemperature, props.temperatureUnit)}° </div>
                            <div className="col-6">L: {convertCelsiusToFahrenheitFormular(props.weatherData.minTemperature, props.temperatureUnit)}°</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">feels like:</div>
                            <div className="col-6">{convertCelsiusToFahrenheitFormular(props.weatherData.feelsLike, props.temperatureUnit)}°</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">humidity:</div>
                            <div className="col-6">{props.weatherData.humidity}%</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">wind:</div>
                            <div className="col-6">{Math.round(props.weatherData.wind)}m/s</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}