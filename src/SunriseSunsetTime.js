import React from "react";
import "./App.css";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";

export default function SunriseSunsetTime() {
    return (
        <div className="SunriseSunsetTime SunriseSunsetWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={Sunrise} alt="Sunrise" width="35" />
                        <div className="sunriseTime">sunrise 06:46</div>
                    </div>
                    <div className="col-6 sunsetLine">
                        <hr />
                    </div>
                    <div className="col-3">
                        <img src={Sunset} alt="Sunset" width="35" />
                        <div className="sunsetTime">sunset 06:46</div>
                    </div>
                </div>
            </div>
        </div>
    );
}