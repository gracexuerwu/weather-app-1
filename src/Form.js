import React from "react";
import "./App.css";
// import axios from "axios";

export default function Form() {
    // function handleResponse(response) {
    //     console.log(response.data);
    // }

    // let city = "Sydney";
    // const apiKey = "4eea4127955e8b06b0dda13735710988";
    // let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // axios.get(apiUrl).then(handleResponse);
    return (
        <form id="search-form">
            <div className="form-row">
                <div className="col-9 btn">
                    <input
                        type="text"
                        className="form-control"
                        id="search-input"
                        placeholder="Enter a city"
                        autoFocus="on"
                        autoComplete="off"
                    />
                </div>
                <div className="col-1 btn search-btn">
                    <button type="submit" className="btn btn-link" id="button-search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="col-2 btn">
                    <button type="submit" className="btn btn-link" id="button-location">
                        <i className="fas fa-location-arrow"></i>
                    </button>
                </div>
            </div>
        </form>
    );
}
