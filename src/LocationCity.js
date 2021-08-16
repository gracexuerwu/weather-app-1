import React from "react";
import "./App.css"


export default function LocationCity(props) {
    return (
        <div className="locationCity">
            <h1 id="location-city" class="text-capitalize">{props.city}</h1>
        </div >
    );
}