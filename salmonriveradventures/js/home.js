function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('currentdesc').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0));
    document.getElementById('tempFahr').textContent = ((((jsObject.main.temp_max) - 273.15) * 1.8 + 32).toFixed(0));
    document.getElementById('humidity').textContent = (jsObject.main.humidity);
    document.getElementById('windSpeed').textContent = (jsObject.wind.speed.toFixed(0));

  });
windchill();
function windchill() {
  let t = parseFloat(document.getElementById('currentdesc').textContent);
  let s = parseFloat(document.getElementById('windSpeed').textContent);
  let wc = 0.0;
  if (t <= 50 && s > 3) {
    wc = Math.round(35.74 + .6215 * t - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16));
    console.log(wc);
  } else {
    wc = "N/A"
  }
  document.getElementById('windchill').innerHTML = wc + "&#8457;"

}
