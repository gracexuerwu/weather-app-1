import React from "react";
import "./App.css";
import Form from "./Form";
import Location from "./Location";
import CurrentDay from "./CurrentDay";
import CurrentTempWrapper from "./CurrentTempWrapper";
import Week from "./Week";
import ForecastBox from "./ForecastBox";



export default function Wrapper() {
    return (
        <div className="container">
            <div className="wrapper" id="background-element">
                <Form />
                <Location />
                <CurrentDay />
                <CurrentTempWrapper />
                <Week />
                <ForecastBox />
            </div>
        </div>
    );
}