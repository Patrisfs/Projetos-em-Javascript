const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')
var len = circle.length;

function on(){
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
  }
}

function off() {
  for (var i = 0; i < len; i++) {
    circle[i].style.animation = "none"
  }
}

function convert() {
  var speed = document.getElementById('quantity').value;
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s";
  }
}

play.addEventListener('click', on);
stop.addEventListener('click', off);
