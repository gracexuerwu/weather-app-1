import React from "react";
import "./App.css"


export default function LocationCountry(props) {
    // Need to convert country code -> country 
    return (
        <div className="locationCountry">
            <h3 id="location-country">{props.weatherData.country}</h3>
        </div>
    );
}