import React from "react";
import "./App.css";
import CurrentTempDetails from "./CurrentTempDetails";

export default function CurrentTempWrapper() {
    return (
        <div className="container">
            <div className="CurrentTempWrapper">
                <CurrentTempDetails />
            </div>
        </div>

    );
}