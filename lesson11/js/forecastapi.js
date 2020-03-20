const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {

                const f = (day.main.temp);
                var fahrenheit = f
                document.getElementById("data" + day_count).textContent = ((fahrenheit - 273.15) * 1.8 + 32).toFixed(0);
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
                console.log(imagesrc);
                const desc = day.weather[0].description;
                let idimg = 'temp' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); // focus on the setAttribute() method
                document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }

    });


const fishforecastAPI = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(fishforecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {

                const f = (day.main.temp);
                var fahrenheit = f
                document.getElementById("fishdata" + day_count).textContent = ((fahrenheit - 273.15) * 1.8 + 32).toFixed(0);
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
                console.log(imagesrc);
                const desc = day.weather[0].description;
                let idimg = 'fishtemp' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); // focus on the setAttribute() method
                document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }

    });


const ssforecastAPI = "https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(ssforecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {

                const f = (day.main.temp);
                var fahrenheit = f
                document.getElementById("ssdata" + day_count).textContent = ((fahrenheit - 273.15) * 1.8 + 32).toFixed(0);
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
                console.log(imagesrc);
                const desc = day.weather[0].description;
                let idimg = 'sstemp' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); // focus on the setAttribute() method
                document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }

    });