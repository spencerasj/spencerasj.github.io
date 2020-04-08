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
        windchill((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0), (jsObject.wind.speed.toFixed(0)),"windchill");
        
    });

const fishapiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(fishapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('fishcurrentdesc').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0));
        document.getElementById('fishtempFahr').textContent = ((((jsObject.main.temp_max) - 273.15) * 1.8 + 32).toFixed(0));
        document.getElementById('fishhumidity').textContent = (jsObject.main.humidity);
        document.getElementById('fishwindSpeed').textContent = (jsObject.wind.speed.toFixed(0));
        windchill((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0), (jsObject.wind.speed.toFixed(0)), "fishwindchill");
    });

const ssapiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83276,us&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(ssapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('sscurrentdesc').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0));
        document.getElementById('sstempFahr').textContent = ((((jsObject.main.temp_max) - 273.15) * 1.8 + 32).toFixed(0));
        document.getElementById('sshumidity').textContent = (jsObject.main.humidity);
        document.getElementById('sswindSpeed').textContent = (jsObject.wind.speed.toFixed(0));
        windchill((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0), (jsObject.wind.speed.toFixed(0)), "sswindchill");    
    });
