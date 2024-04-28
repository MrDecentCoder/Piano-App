//Button press detecting

let numberOfButtons = document.querySelectorAll(".piano").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeMusic(buttonInnerHTML);
  });
}
//Keyboard Press detecting
document.addEventListener("keypress", function (event) {
  makeMusic(event.key);
});

function makeMusic(key) {
  switch (key) {
    case "c":
      let tom1 = new Audio("music/c.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("music/a.mp3");
      tom2.play();
      break;
    case "b":
      let tom3 = new Audio("music/b.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("music/d.mp3");
      tom4.play();
      break;

    case "e":
      let tom5 = new Audio("music/e.mp3");
      tom5.play();
      break;

    case "f":
      let tom6 = new Audio("music/f.mp3");
      tom6.play();
      break;

    case "g":
      let tom7 = new Audio("music/g.mp3");
      tom7.play();
      break;
    default:
      break;
  }
}
