var first = Math.floor(Math.random() * 6) + 1;

var second = Math.floor(Math.random() * 6) + 1;

console.log("The first number is: " + first);

console.log("The second number is: " + second);

var first_image = "dice" + first + ".png";

var second_image = "dice" + second + ".png";

var img_1 = document.getElementById("player1");
img_1.src = "images/" + first_image;

var img_2 = document.getElementById("player2");
img_2.src = "images/" + second_image;

if (first == second) {
  document.querySelector("h1").innerText = "Match has been Drawn";
} else if (first > second) {
  document.querySelector("h1").innerText = "Player 1 Wins";
  document.querySelector("h1").innerHTML =
    '<img src="images/winner.png" alt="win-image" /> Player 1 Wins ';
} else {
  document.querySelector("h1").innerText = "Player 2 Wins";
  document.querySelector("h1").innerHTML =
    ' Player 2 Wins <img src="images/winner.png" alt="win-image" />';
}
