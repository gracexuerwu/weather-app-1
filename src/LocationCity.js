import React from "react";
import "./App.css"


export default function LocationCity(props) {
    return (
        <div className="locationCity">
            <h1 id="location-city" className="text-capitalize">{props.city}</h1>
        </div >
    );
}