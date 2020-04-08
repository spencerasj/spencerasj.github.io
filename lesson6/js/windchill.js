
    let t = parseFloat(document.getElementById('tempFahr').textContent); 
    let s = parseFloat(document.getElementById('windSpeed').textContent);
    let wc = 0;
       if (t <= 50 && s > 3) {
        let wc = Math.round( 35.74 + (.6215 * tempF) - ((35.75) * (speed ** .16)) + ((.4275 * tempF) * (speed ** .16)));
      }
       else {
         wc= "N/A"
       }
          document.getElementById('windchill').innerHTML = wc + "&#8457;"
  
      
