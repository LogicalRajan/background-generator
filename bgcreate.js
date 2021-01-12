var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var csstext = document.querySelector("#csstext");
var bggradient = document.querySelector("#bggradient");

function setgradient(){
    bggradient.style.background =
    "linear-gradient(to right,"+ color1.value +"," + color2.value + ")";
    csstext.innerHTML = bggradient.style.background + ";"
}

color1.addEventListener("input",setgradient)
color2.addEventListener("input",setgradient)