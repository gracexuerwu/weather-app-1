import React from "react";
import "./App.css";
import Form from "./Form";
import Location from "./Location";
import CurrentDay from "./CurrentDay";
import CurrentTempWrapper from "./CurrentTempWrapper";
import Week from "./Week";
import ForecastBox from "./ForecastBox";
import SunriseSunsetWrapper from "./SunriseSunsetWrapper";
import Signature from "./Signature";
import TemperatureToggle from "./TemperatureToggle";



export default function Wrapper() {
    function callback(temperatureUnit) {
        console.log(temperatureUnit);
    }
    return (
        <div className="container">
            <div className="wrapper" id="background-element">
                <Form />
                <Location />
                <TemperatureToggle toggle={true} callback={callback} />
                <CurrentDay />
                <CurrentTempWrapper />
                <Week />
                <ForecastBox />
                <SunriseSunsetWrapper />
                <Signature />
            </div>
        </div>
    );
}