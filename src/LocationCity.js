import React from "react";
import "./App.css"


export default function LocationCity({ locationCityValue }) {
    return (
        <div className="locationCity">
            <h1 id="location-city">{locationCityValue}</h1>
        </div >
    );
}