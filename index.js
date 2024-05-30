var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomResim = "dice" + randomNumber1 + ".png";
var randomLink = "images/" + randomResim;
var resim1 = document.querySelectorAll("img")[0];
resim1.setAttribute("src", randomLink);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomResim2 = "dice" + randomNumber2 + ".png";
var randomLink2 = "images/" + randomResim2;
var resim2 = document.querySelectorAll("img")[1];
resim2.setAttribute("src", randomLink2);

if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML= "1. oyuncu kazandı "
 }
 else if(randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML= "2. oyuncu kazandı "
 }
 else {
    document.querySelector("h1").innerHTML= "berabere "
} 