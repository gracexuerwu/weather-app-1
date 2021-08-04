import React from "react";
import "./App.css";

export default function Form() {
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
                <div className="col-3 btn">
                    <button type="submit" className="btn btn-link" id="button-search">
                        <i className="fas fa-search"></i>
                    </button>
                    <button type="submit" className="btn btn-link" id="button-location">
                        <i className="fas fa-location-arrow"></i>
                    </button>
                </div>
            </div>
        </form>
    );
}
