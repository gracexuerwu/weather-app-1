import React from "react";
import "./App.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function CurrentTempDetails() {
    return (
        <div className="CurrentTempDetails">
            <div className="container">
                <div className="row">
                    <div className="col-2 currentTempIcon">
                        <ReactAnimatedWeather
                            icon="CLEAR_DAY"
                            color="black"
                            size={55}
                            animate={true}
                        />
                    </div>
                    <div className="col-4">
                        <div className="row text-center">
                            <div className="col-12 currentTempDisplay">
                                25°
                            </div>
                            <div className="col-12 currentTempDescription">
                                A sunny day
                            </div>
                        </div>
                    </div>
                    <div className="col-6 weather-details">
                        <div className="row">
                            <div className="col-6">H: 28° </div>
                            <div className="col-6">L:18°</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">feels like:</div>
                            <div className="col-6">24°</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">humidity:</div>
                            <div className="col-6">40%</div>
                        </div>
                        <div className="row weather-details-row">
                            <div className="col-6">wind:</div>
                            <div className="col-6">20km/h</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}