var randomNumber1 = Math.floor(Math.random() *6 )+ 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//image 2

var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//Comparing the two images

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won"
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 won"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}








































