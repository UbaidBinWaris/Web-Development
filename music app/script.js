var j = document.querySelectorAll(".drum").length;
// for(var i=0 ; i<j; i++){
//     // document.querySelector(".drum")[i].addEventListener("click", function(){
//         // var audio = new Audio("sounds/" + this.innerHTML + ".mp3");
//         // audio.play();
//     // })

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         // var audio = new Audio("sounds/" + this.innerHTML + ".mp3");
//         alert("working");
// })
// }
document.querySelector(".w").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
});

document.querySelector(".a").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
});

document.querySelector(".s").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
});

document.querySelector(".d").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
});

document.querySelector(".j").addEventListener("click", function () {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
});

document.querySelector(".k").addEventListener("click", function () {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
});

document.querySelector(".l").addEventListener("click", function () {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W") {
    var audio = new Audio("sounds/tom-1.mp3");
    event.preventDefault();
    audio.play();
  }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
      var audio = new Audio("sounds/tom-2.mp3");
      event.preventDefault();
      audio.play();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "s" || event.key === "S") {
      var audio = new Audio("sounds/tom-3.mp3");
      event.preventDefault();
      audio.play();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "d" || event.key === "D") {
      var audio = new Audio("sounds/tom-4.mp3");
      event.preventDefault();
      audio.play();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "j" || event.key === "J") {
      var audio = new Audio("sounds/snare.mp3");
      event.preventDefault();
      audio.play();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "k" || event.key === "K") {
      var audio = new Audio("sounds/crash.mp3");
      event.preventDefault();
      audio.play();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "l" || event.key === "L") {
      var audio = new Audio("sounds/kick-bass.mp3");
      event.preventDefault();
      audio.play();
    }
  });
