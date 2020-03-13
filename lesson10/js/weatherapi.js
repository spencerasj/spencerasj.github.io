const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // document.getElementById('current-temp').textContent = jsObject.main.temp;
      document.getElementById('current-temp').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(2));
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
/*let imagelink=`http://openweathermap.org/img/wn/${forecastObject.list[i].weather[0].icon}@2x.png`;

   document.getElementById(imageid).setAttribute('src', imagelink);*/