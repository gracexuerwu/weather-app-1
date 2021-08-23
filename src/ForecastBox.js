import React, { useEffect, useState } from "react";
import "./App.css";
import ForecastBoxDaily from "./ForecastBoxDaily";
import axios from "axios";

export default function ForecastBox(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        // console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        console.log(forecast);
        return (
            <div className="ForecastBox">
                <div className="row" id="forecast-row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <span className="col forecastCol" key={index}>
                                    <ForecastBoxDaily data={dailyForecast} />
                                </span>
                            );
                        }
                        else {
                            return null;
                        }
                    })}
                </div>
            </div >
        );
    } else {
        const apiKey = "4eea4127955e8b06b0dda13735710988";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}