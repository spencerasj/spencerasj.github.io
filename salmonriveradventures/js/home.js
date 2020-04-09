function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=97617174116da9f8f4bdafa9bc37bff2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    
    document.getElementById('current').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0)) + "&#8457;";
    document.getElementById('tempFahr').textContent = ((((jsObject.main.temp_max) - 273.15) * 1.8 + 32).toFixed(0)) + "&#8457;";
    document.getElementById('humidity').textContent = (jsObject.main.humidity) + "&#37";
    document.getElementById('windSpeed').textContent = (jsObject.wind.speed.toFixed(0)) + "mph";
    
windchill(((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(0)), (jsObject.wind.speed.toFixed(0)));

  });
  function windchill(t,s) {
    //let t = parseFloat(document.getElementById('tempFahr').textContent);
    //let s = parseFloat(document.getElementById('windSpeed').textContent);
    let wc = 0;
    
    if (t <= 50 && s > 3) {
      wc = Math.round(35.74 + .6215 * t - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16));
    } else {
      wc = "N/A"
    }
    document.getElementById("windchill").innerHTML = wc + "&#8457;"
  
  }




fetch("guides.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     

    const guides = jsonObject['guides'];
    for (let i = 0; i < guides.length; i++ ) {
        if (guides[i].name === "Samantha" || guides[i].name == "Kate" || guides[i].name == "Ken") {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let name = document.createElement('h3');
        let photo = document.createElement('img');
        let certification = document.createElement('p');
        let experience = document.createElement('p');
        let email = document.createElement('p');
        let bio = document.createElement('p');
        

        name.textContent = guides[i].name;
        photo.setAttribute('src', 'images/' + guides[i].photo);
        certification.textContent = "Level of Certification: " + guides[i].certification;
        experience.textContent = "Experience: " + guides[i].yearsOfExperience;
        email.textContent = "Email: " + guides[i].email;
        bio.textContent = "Bio: " + guides[i].bio;
        
        div.appendChild(name);
        div.appendChild(certification);
        div.appendChild(experience);
        div.appendChild(email);
        div.appendChild(bio);
        card.appendChild(div);
        card.appendChild(photo);
        
        
            


document.querySelector('div.cards').appendChild(card);
        }
      };
    }); 
