const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let photo = document.createElement('img');

        if (towns[i].name = ("Fish Haven" || "Preston" || "Soda Springs"));
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Poulation: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            photo.setAttribute('src', "images/" + towns[i].photoj);
            card.appendChild(name);
            card.appendChild(yearFounded);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(photo);

document.querySelector('div.cards').appendChild(card);
      };
    }); 