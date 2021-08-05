import React from "react";
import "./App.css";
import Form from "./Form";
import CurrentDay from "./CurrentDay";
import CurrentTempWrapper from "./CurrentTempWrapper";
import Week from "./Week";
import ForecastBox from "./ForecastBox";
import SunriseSunsetWrapper from "./SunriseSunsetWrapper";
import Signature from "./Signature";
import TemperatureToggle from "./TemperatureToggle";
import LocationCountry from "./LocationCountry";
import LocationCity from "./LocationCity";



export default function Wrapper() {
    function callback(temperatureUnit) {
        console.log(temperatureUnit);
    }
    return (
        <div className="container">
            <div className="wrapper" id="background-element">
                <Form />
                <div className="row justify-content-between">
                    <div className="col-4">
                        <LocationCountry />
                    </div>
                    <div className="col-4 temperature-toggle">
                        <TemperatureToggle toggle={true} callback={callback} />
                    </div>
                </div>
                <LocationCity />
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