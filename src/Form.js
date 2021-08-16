import React, { useState } from "react";
import "./App.css";

export default function Form(props) {
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.callback(city);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <form id="search-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-9 btn">
                    <input
                        type="text"
                        onChange={updateCity}
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
