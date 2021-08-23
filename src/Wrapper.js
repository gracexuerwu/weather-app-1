import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import CurrentDay from "./CurrentDay";
import CurrentTempDetails from "./CurrentTempDetails";
import Week from "./Week";
import ForecastBox from "./ForecastBox";
import SunriseSunsetTime from "./SunriseSunsetTime";
import Signature from "./Signature";
import TemperatureToggle from "./TemperatureToggle";
import LocationCountry from "./LocationCountry";
import LocationCity from "./LocationCity";
import axios from "axios";
import Loader from "react-loader-spinner";



export default function Wrapper() {
    //Temperature toggle 
    function callbackByTemperatureUnit(temperatureUnitFromToggle) {
        // alert(temperatureUnitFromToggle);
        setTemperatureUnit(temperatureUnitFromToggle);
    }

    function callbackByForm(cityFromForm) {
        if (cityFromForm === "") {
            return;
        }
        setCity(cityFromForm);
        callWeatherAPI(cityFromForm);
    }

    function callWeatherAPI(city) {
        const apiKey = "4eea4127955e8b06b0dda13735710988";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    //WeatherData 
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState("Sydney");
    const [temperatureUnit, setTemperatureUnit] = useState(true);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            minTemperature: response.data.main.temp_min,
            maxTemperature: response.data.main.temp_max,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            timeStamp: response.data.dt * 1000,
            timezone: response.data.timezone / 3600,
            icon: response.data.weather[0].icon,
            coordinates: response.data.coord,
            sunriseTime: response.data.sys.sunrise * 1000,
            sunsetTime: response.data.sys.sunset * 1000
        });
    }
    if (weatherData.ready) {
        return (
            <div className="container">
                <div className="wrapper" id="background-element">
                    <Form callback={callbackByForm} />
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <LocationCountry weatherData={weatherData} />
                        </div>
                        <div className="col-4 temperature-toggle">
                            <TemperatureToggle toggle={temperatureUnit} callback={callbackByTemperatureUnit} />
                        </div>
                    </div>
                    <LocationCity city={city} />
                    <CurrentDay timezone={weatherData.timezone} />
                    <CurrentTempDetails weatherData={weatherData} temperatureUnit={temperatureUnit} />
                    <Week />
                    <ForecastBox coordinates={weatherData.coordinates} temperatureUnit={temperatureUnit} />
                    <SunriseSunsetTime sunriseTime={weatherData.sunriseTime} sunsetTime={weatherData.sunsetTime} timezone={weatherData.timezone} />
                    <Signature />
                </div>
            </div>
        );
    }
    else {
        callWeatherAPI(city)
        // return "Loading...";
        return (
            <Loader
                type="TailSpin"
                color="#777777"
                height={50}
                width={50}
                timeout={10000} //3 secs
            />
        );
    }
}