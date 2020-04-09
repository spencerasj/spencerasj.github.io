function windchill() {
  let t = parseFloat(document.getElementById('tempFahr').textContent);
  let s = parseFloat(document.getElementById('windSpeed').textContent);
  let wc = 0;
  if (t <= 50 && s > 3) {
    wc = Math.round(35.74 + .6215 * t - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16));
  } else {
    wc = "N/A"
  }
  document.getElementById('windchill').innerHTML = wc + "&#8457;"

}
windchill();