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
});

// Getting the 5 day forecast
const apiURL =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=095511d7aa183faa8fdebdb0c54033d8";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  let day = 1;
  const dayofWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const threeDayForecast = [
    jsObject.daily[1],
    jsObject.daily[2],
    jsObject.daily[3],
  ];

  threeDayForecast.forEach((x) => {
    let d = new Date(x.dt * 1000);
    document.querySelector(`#dayofweek${day}`).textContent =
      dayofWeek[d.getDay()];
    document.querySelector(`#temp${day}`).textContent = x.temp.day;
    day++;
  });

  // Information for weather alert
  if (jsObject.current.alerts) {
    document.querySelector(".xbutton").style.display = "block";

    document.querySelector("#weatherAlert").textContent =
      jsObject.alerts.description;

    const xbutton = document.querySelector(".xbutton");

    xbutton.addEventListener(
      "click",
      () => {
        xbutton.style.display = "none";
      },
      false
    );

    window.onresize = () => {
      if (window.innerWidth > 760) mainnav.classList.remove("hide");
    };
  }
});