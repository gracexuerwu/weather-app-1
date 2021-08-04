import React from "react";
import "./App.css";
import SunriseSunsetTime from "./SunriseSunsetTime";

export default function SunriseSunsetWrapper() {
    return (
        <div className="container">
            <div className="SunriseSunsetWrapper">
                <SunriseSunsetTime />
            </div>
        </div>

    );
}