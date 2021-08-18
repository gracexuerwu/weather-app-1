import React from "react";
import Lottie from 'lottie-react';

// import CLEAR_DAY from "./animation/ClearDay.json";
// import CLEAR_NIGHT from "./animation/ClearNight.json";
import weatherCloudy from "./animation/cloudy.json";


export default function WeatherLottie(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "010d": "RAIN",
        "010n": "RAIN",
        "011d": "CLEAR_DAY",
        "011n": "CLEAR_NIGHT",
        "013d": "SNOW",
        "013n": "SNOW",
        "050d": "FOG",
        "050n": "FOG",
    };
    
    let weatherIcon;
    // if (props.code === "04d" || props.code === "04n") {
    //   weatherIcon = weatherCloudy;
    // } 
    // else if () {

    // }
    weatherIcon = weatherCloudy;
    return (
      <Lottie animationData={weatherIcon} />
    );
}