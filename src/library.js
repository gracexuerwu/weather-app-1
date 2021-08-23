export function convertCelsiusToFahrenheitFormular(temperatureInCelsius, temperatureUnit) {
    if (temperatureUnit) {
        return Math.round(temperatureInCelsius);
    }
    else {
        return Math.round((temperatureInCelsius * 9 / 5) + 32);
    }
}

export function getTime(timestamp, timeZone) {
    let date = new Date(timestamp);
    let hours = (date.getUTCHours() + timeZone + 24) % 24;
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
}