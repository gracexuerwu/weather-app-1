import React from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';


export default function CurrentTempDetails(props) {

    return (
        <div className="CurrentTempDetails">
            <div className="container CurrentTempWrapper">
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
                                {Math.round(props.weatherData.temperature)}°
                            </div>
                            <div className="col-12 currentTempDescription">
                                A {props.weatherData.description} day
                            </div>
                        </div>
                    </div>
                    <div className="col-6 weather-details">
                        <div className="row weather-details-row">
                            <div className="col-6">H: {Math.round(props.weatherData.maxTemperature)}° </div>
                            <div className="col-6">L: {Math.round(props.weatherData.minTemperature)}°</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">feels like:</div>
                            <div className="col-6">{Math.round(props.weatherData.feelsLike)}°</div>
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