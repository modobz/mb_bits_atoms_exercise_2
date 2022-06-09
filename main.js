var cow = document.getElementById("cow");
var walking = 0;
var counter = 0;

function walk() {
  walking = 1;
  let walkCount = 0;
  var walkInterval = setInterval(function () {
    var cowTop = parseInt(window.getComputedStyle(cow).getPropertyValue("top"));
    if (cowTop > 6 && walkCount < 15) {
      cow.style.top = cowTop - 5 + "px";
    }
    walkCount++;
  }, 10);
}
