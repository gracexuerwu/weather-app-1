import React from "react";
import "./App.css";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";
// import Lottie from 'lottie-react';
// import sunrise from "./animation/sunrise.json";
// import sunset from "./animation/sunset.json";

export default function SunriseSunsetTime(props) {
    function getTime(timestamp, timeZone) {
        let date = new Date(timestamp);
        let hours = (date.getUTCHours() + timeZone + 24) % 24;
        if (hours < 10) {
            hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`;
    }
    let sunriseFormatTime = getTime(props.sunriseTime, props.timezone);
    let sunsetFormatTime = getTime(props.sunsetTime, props.timezone);

    return (
        <div className="SunriseSunsetTime SunriseSunsetWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={Sunrise} alt="Sunrise" width="35" />
                        <div className="sunriseTime">sunrise {sunriseFormatTime}</div>
                    </div>
                    <div className="col-6 sunsetLine">
                        <hr />
                    </div>
                    <div className="col-3">
                        <img src={Sunset} alt="Sunset" width="35" />
                        <div className="sunsetTime">sunset {sunsetFormatTime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}