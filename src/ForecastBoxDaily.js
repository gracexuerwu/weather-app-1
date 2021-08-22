import React from "react";
import "./App.css";
import WeatherLottie from "./WeatherLottie";

export default function ForecastBoxDaily(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div className="forecastBoxDaily col-2">
            <div className="forecast-date">{day()}</div>
            <div className="forecastDailyIcon">
                <WeatherLottie code={props.data.weather[0].icon} />
            </div>
            <div className="row forecast-temperature no-gutters">
                <div className="col-6">
                    <span className="forecast-temperature-max">
                        {Math.round(props.data.temp.max)}°</span>
                </div>
                <div className="col-6">
                    <span className="forecast-temperature-min">
                        {Math.round(props.data.temp.min)}°
                    </span>
                </div>
            </div>
        </div>
    );
}