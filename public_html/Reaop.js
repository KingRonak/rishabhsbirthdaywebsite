function drawCircle(selector, center, radius, angle, x, y) {
  var total = $(selector).length;
  var alpha = Math.PI * 2 / total;
  angle *= Math.PI / 180;

  $(selector).each(function(index) {
    var theta = alpha * index;
    var pointx  =  Math.floor(Math.cos( theta + angle ) * radius);
    var pointy  = Math.floor(Math.sin( theta + angle ) * radius );

    $(this).css('margin-left', pointx + x + 'px');
    $(this).css('margin-top', pointy + y + 'px');
  });
}

window.onload = setInterval(GameLoop, 1000 / 10); //10fps

let myAudio = new Audio();

myAudio.src = 'Aartifinalmp3';

function Gameloop() {
    myAudio.play();
    if (myAudio.paused == true) {
        myAudio.play();
    }
}