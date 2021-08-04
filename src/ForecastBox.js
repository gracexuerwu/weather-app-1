import React from "react";
import "./App.css";
import ForecastBoxDaily from "./ForecastBoxDaily";

export default function ForecastBox() {
    return (
        <div className="ForecastBox">
            <div className="row" id="forecast-row">
                <ForecastBoxDaily day="Mon" icon="FOG" />
                <ForecastBoxDaily day="Tue" icon="PARTLY_CLOUDY_DAY" />
                <ForecastBoxDaily day="Wed" icon="CLEAR_DAY" />
                <ForecastBoxDaily day="Thur" icon="RAIN" />
                <ForecastBoxDaily day="Fri" icon="CLOUDY" />
            </div>
        </div >

    );
}