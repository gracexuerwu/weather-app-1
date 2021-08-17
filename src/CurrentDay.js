import React from "react";
import "./App.css";

export default function CurrentDay(props) {
    console.log(props.timezone);
    let date = new Date();
    let hours = (date.getUTCHours() + (props.timezone) + 24) % 24;
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div className="CurrentDay">
            <h3>LOCAL TIME {hours}: {minutes}</h3>
        </div>
    );
}
