// Wind chill formula
let tempF = document.querySelector("#tempF");
let windSpeed = parseFloat(document.querySelector("#windspeed").innerText);

function windChill(tempF, windSpeed) {
  return 35.74 +
    0.6215 * tempF - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempF * Math.pow(windSpeed, 0.16);
}

// Getting the current weather conditions
const apiURLcurrent =
"https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=095511d7aa183faa8fdebdb0c54033d8";
fetch(apiURLcurrent)
.then((response) => response.json())
.then((jsObject) => {
  document.querySelector("#weathertype").textContent =
    jsObject.weather[0].description;
  document.querySelector("#tempF").textContent =
    jsObject.main.temp.toFixed(0);
  document.querySelector("#humidity").textContent = jsObject.main.humidity;
  document.querySelector("#windspeed").textContent = jsObject.wind.speed;

  // displays either the wind chill or N/A
  if (jsObject.main.temp <= 50 && jsObject.wind.speed >= 3) {
      chill = windChill(jsObject.main.temp, jsObject.wind.speed);
      document.querySelector("#windchill").textContent = chill.toFixed(0);
  }
  else {
      document.querySelector("#windchill").textContent = 'N/A';
  };
});

// Getting the 5 day forecast
const apiURL =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=095511d7aa183faa8fdebdb0c54033d8";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  let day = 1;
  const dayofWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const fiveDayForecast = jsObject.list.filter((forecast) =>
    forecast.dt_txt.includes("18:00:00")
  );

  fiveDayForecast.forEach((x) => {
    let d = new Date(x.dt_txt);
    document.querySelector(`#dayofweek${day}`).textContent =
      dayofWeek[d.getDay()];
    document.querySelector(`#dailytemp${day}`).textContent =
      x.main.temp.toFixed(0);

    let iconimg = document.createElement("img");

    const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    const desc = x.weather[0].description;

    iconimg.setAttribute("src", imagesrc);
    iconimg.setAttribute("alt", desc);

    document.querySelector(`#icon${day}`).appendChild(iconimg);
    day++;
  });
});