
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber1string = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomNumber1string);

// img2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumber2string = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumber2string);

if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelectorAll("h1")[0].textContent = "player 2 Wins!🚩";
}
else {
    document.querySelectorAll("h1")[0].textContent = "🚩Draw🚩"
}