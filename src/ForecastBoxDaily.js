import React from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios";

export default function ForecastBoxDaily(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "4eea4127955e8b06b0dda13735710988";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="forecastBoxDaily col-2">
            <div className="forecast-date">Mon</div>
            <div id="weather-icon">
                <ReactAnimatedWeather
                    icon="CLOUDY"
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