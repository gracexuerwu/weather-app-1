import './TemperatureToggle.css';
import React, { useState } from "react";

export default function TemperatureToggle(props) {

    function onChangeTemperatureToggle(e) {
        // console.log(e);
        // console.log(e.target.checked);
        props.callback(!toggleState);
        setToggleState(!toggleState);
    }

    const [toggleState, setToggleState] = useState(props.toggle);

    return (
        <div>
            <label className="toggleSwitch nolabel">
                <input type="checkbox" checked={toggleState} onChange={onChangeTemperatureToggle} />
                <span>
                    <span>&nbsp;&nbsp;F°</span>
                    <span>C°</span>
                </span>
                {/* eslint-disable-next-line */}
                <a />
            </label>
        </div>
    );
}