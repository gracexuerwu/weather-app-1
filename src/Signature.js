import React from "react";
import "./App.css";

export default function Signature() {
    return (
        <div className="Signature">
            <span className="signature-blue"><a href="https://github.com/gracexuerwu/weather-app-1-react" target="_blank" rel="noreferrer" className="signatureGitLink">Open-source</a></span> code

            <i className="fab fa-github fa-lg"></i>by <a href="https://www.linkedin.com/in/grace-ade-wu/" target="_blank" rel="noreferrer" className="signatureLinkedIn">Grace Wu</a>
        </div >
    );
}