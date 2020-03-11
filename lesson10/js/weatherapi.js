const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i = 0; i < jsObject.list.length; i++ ) {
        document.getElementById('current-temp').textContent = ((((jsObject.list[i].main.temp) - 273.15) * 1.8 + 32).toFixed(2));
    }
    for (let i = 0; i < jsObject.weather.length; i++ ) {
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[i].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[i].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
}});