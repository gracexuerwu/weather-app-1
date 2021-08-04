import React from "react";
import "./App.css";
import githubLogo from "./images/github-logo.png";

export default function Signature() {
    return (
        <div className="Signature">
            <span className="signature-blue">Open-source</span> code

            <i class="fab fa-github fa-lg"></i>by Grace Wu
        </div>
    );
}