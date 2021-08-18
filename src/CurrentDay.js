import React, { useState, useMemo } from "react";
import "./App.css";

export default function CurrentDay(props) {
  useMemo(() => {
    console.log("Run only once");
    setInterval(updateMinuteSecond, 1000);
  }, []);

  function updateMinuteSecond() {
    let date = new Date();
    let sec = date.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`;
    }
    setSeconds(sec);
  }

  const [seconds, setSeconds] = useState("00");

  let date = new Date();
  let hours = (date.getUTCHours() + props.timezone + 24) % 24;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="CurrentDay">
      <h3>
        LOCAL TIME {hours}:{minutes}:{seconds}
      </h3>
    </div>
  );
}
