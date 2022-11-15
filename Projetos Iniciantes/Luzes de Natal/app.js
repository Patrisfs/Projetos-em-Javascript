const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
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

play.addEventListener('click', on);
stop.addEventListener('click', off);
