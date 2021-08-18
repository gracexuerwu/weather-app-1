import React from "react";
import Lottie from 'lottie-react';

import cloudy from "./animation/cloudy.json";
import fog from "./animation/cloudy.json";
import haze from "./animation/cloudy.json";
import lightSnow from "./animation/cloudy.json";
import night from "./animation/cloudy.json";
import rainy from "./animation/cloudy.json";
import stormy from "./animation/cloudy.json";
import sun from "./animation/cloudy.json";
import torrentialRain from "./animation/cloudy.json";


export default function WeatherLottie(props) {
  // const codeMapping = {
  //   "01d": "CLEAR_DAY",
  //   "01n": "CLEAR_NIGHT",
  //   "02d": "PARTLY_CLOUDY_DAY",
  //   "02n": "PARTLY_CLOUDY_NIGHT",
  //   "03d": "PARTLY_CLOUDY_DAY",
  //   "03n": "PARTLY_CLOUDY_NIGHT",
  //   "04d": "CLOUDY",
  //   "04n": "CLOUDY",
  //   "09d": "RAIN",
  //   "09n": "RAIN",
  //   "010d": "RAIN",
  //   "010n": "RAIN",
  //   "011d": "CLEAR_DAY",
  //   "011n": "CLEAR_NIGHT",
  //   "013d": "SNOW",
  //   "013n": "SNOW",
  //   "050d": "FOG",
  //   "050n": "FOG",
  // };
  let weatherIcon;
  if (props.code === "01d") {
    weatherIcon = sun;
  }
  else if (props.code === "01n") {
    weatherIcon = night;
  }
  else if (props.code === "02d") {
    weatherIcon = cloudy;
  }
  else if (props.code === "02n") {
    weatherIcon = night;
  }
  else if (props.code === "03d" || props.code === "03n" || props.code === "04d" || props.code === "04n") {
    weatherIcon = cloudy;
  }
  else if (props.code === "09d" || props.code === "09n") {
    weatherIcon = rainy;
  }
  else if (props.code === "010d" || props.code === "010n") {
    weatherIcon = torrentialRain;
  }
  else if (props.code === "011d" || props.code === "011n") {
    weatherIcon = stormy;
  }
  else if (props.code === "013d" || props.code === "013n") {
    weatherIcon = lightSnow;
  }
  else if (props.code === "50d") {
    weatherIcon = haze;
  }
  else if (props.code === "50n") {
    weatherIcon = fog;
  }
  else {
    weatherIcon = sun;
  }
  return (
    <Lottie animationData={weatherIcon} />
  );
}

  // else if (props.code === "05d" || props.code === "05n") {
  //   weatherIcon = cloudy;
  // }