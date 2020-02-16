function getInput() {
    let t = parseFloat(document.getElementById('tempFahr').value); 
    let s = parseFloat(document.getElementById('windSpeed').value);
    let wc = windChill(t, s) 
       if(t <= 50 && s >= 3) {
          document.getElementById('windchill').innerHTML = wc + "&#8457;";}
  } 
  function windChill(tempF, speed) {
    let f = 35.74 + (.6215 * tempF) - ((35.75) * (speed ** .16)) + ((.4275 * tempF) * (speed ** .16));
        return f;
}
  