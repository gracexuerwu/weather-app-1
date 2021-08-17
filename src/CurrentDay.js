import React, { useState } from "react";
import "./App.css";

export default function CurrentDay(props) {
    // console.log(props.timezone);
    function updateHourMinute() {
      let date = new Date();
      let hours = (date.getUTCHours() + (props.timezone) + 24) % 24;
      if (hours < 10) {
          hours = `0${hours}`;
      }
      setHourString(hours);

      let minutes = date.getMinutes();
      if (minutes < 10) {
          minutes = `0${minutes}`;
      }
      setMinuteString(minutes);

      let seconds = date.getSeconds();
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      setSecondString(seconds);
    }

    const [hourString, setHourString] = useState("");
    const [minuteString, setMinuteString] = useState("");
    const [secondString, setSecondString] = useState("");

    setInterval(updateHourMinute, 1000);
    // updateHourMinute();

    return (
        <div className="CurrentDay">
            <h3>LOCAL TIME {hourString}:{minuteString}:{secondString}</h3>
        </div>
    );
}
