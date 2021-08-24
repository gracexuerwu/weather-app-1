import React from "react";
import "./App.css";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";
import { getTime } from "./library";

// import Lottie from 'lottie-react';
// import sunrise from "./animation/sunrise.json";
// import sunset from "./animation/sunset.json";

export default function SunriseSunsetTime(props) {
    let sunriseFormatTime = getTime(props.sunriseTime, props.timezone);
    let sunsetFormatTime = getTime(props.sunsetTime, props.timezone);

    return (
        <div className="SunriseSunsetTime SunriseSunsetWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={Sunrise} alt="Sunrise" width="35" />
                        <div className="sunriseTime">sunrise <span className="timeDisplay">{sunriseFormatTime}</span></div>
                    </div>
                    <div className="col-6 sunsetLine">
                        <hr />
                    </div>
                    <div className="col-3">
                        <img src={Sunset} alt="Sunset" width="35" />
                        <div className="sunsetTime">sunset <span className="timeDisplay">{sunsetFormatTime}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}