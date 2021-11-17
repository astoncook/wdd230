let tempF = document.querySelector("#tempF");
let windSpeed = parseFloat(document.querySelector("#windspeed").innerText);

console.log(tempF);

function windChill(tempF, windSpeed) {
  return 35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);
}

let wind_chill =
  tempF <= 50 && windSpeed >= 3
    ? windChill(tempF, windSpeed).toFixed(1) : "N/A";

    document.querySelector("#windchill").innerText = wind_chill;