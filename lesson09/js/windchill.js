let TEMPERATURE = document.getElementById('temperature').textContent;
let WINDSPEED = document.getElementById('windspeed').textContent;

if(TEMPERATURE <= 50 && WINDSPEED >= 3){
  let X = Math.pow(WINDSPEED, 0.16);
  let I = 35.74 + 0.6215 * TEMPERATURE - 35.75 * X + 0.4275 * TEMPERATURE * X;
  let result = I.toFixed(0);
  document.getElementById('windchill').innerHTML = result + "&deg;F";
}