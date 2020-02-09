function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }


  let nLastModif = new Date(document.lastModified);
console.log (nLastModif);
document.getElementById("datechanged").innerHTML= nLastModif;