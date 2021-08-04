import React from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function ForecastBoxDaily(props) {
    return (
        <div className="forecast col-2">
            <div className="forecast-date">{props.day}</div>
            <div id="weather-icon">
                <ReactAnimatedWeather
                    icon={props.icon}
                    color="black"
                    size={40}
                    animate={true}
                />
            </div>
            <div className="row forecast-temperature no-gutters">
                <div className="col-6">
                    <span className="forecast-temperature-max">
                        18°</span>
                </div>
                <div className="col-6">
                    <span className="forecast-temperature-min">
                        10°
                    </span>
                </div>
            </div>
        </div>

    );
}