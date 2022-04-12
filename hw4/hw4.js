var ABC = {
  'A': 'img/A.png',
  'B': 'img/B.png',
  'C': 'img/C.png',
  'D': 'img/D.png',
  'E': 'img/E.png',
  'F': 'img/F.png',
  'G': 'img/G.png',
  'H': 'img/H.png',
  'I': 'img/I.png',
  'J': 'img/J.png',
  'K': 'img/K.png',
  'L': 'img/L.png',
  'M': 'img/M.png',
  'N': 'img/N.png',
  'O': 'img/O.png',
  'P': 'img/P.png',
  'Q': 'img/Q.png',
  'R': 'img/R.png',
  'S': 'img/S.png',
  'T': 'img/T.png',
  'U': 'img/U.png',
  'V': 'img/V.png',
  'W': 'img/W.png',
  'X': 'img/X.png',
  'Y': 'img/Y.png',
  'Z': 'img/Z.png'
};
var track = ['#track1', '#track2', '#track3', '#track4', '#track5', '#track6'];

$(document).ready(function() {
  $(document).keydown(rtime);
  $(document).keydown(function(e) {
    setInterval(create, 1000 / 1.5);
    // correct
    for (var i = 0; i < 6; i++) {
      if (e.key == track[i].slice(-1)) {
        $('track' + i).last().remove();
        track[i] = track[i].slice(0, -1);
        break;
      }
    }
  });
  setInterval(stop_animate, 1);  // stop game
});

function stop_animate() {
  if ($('img').filter('.track1').last().offset().left >= 1300 ||
      $('img').filter('.track2').last().offset().left >= 1300 ||
      $('img').filter('.track3').last().offset().left >= 1300 ||
      $('img').filter('.track4').last().offset().left >= 1300 ||
      $('img').filter('.track5').last().offset().left >= 1300 ||
      $('img').filter('.track6').last().offset().left >= 1300) {
    clearInterval(st);
    alert('GAME OVER!');
  }
}

function create() {
  if (t > 1) {
    for (var i = 0; i < 6; i++) {
      let RandomNumber = Math.floor(Math.random() * 26);
      var newAlp = String.fromCharCode(65 + RandomNumber);
      $(track[i]).prepend(track[i] + img[newAlp]);
      // animate
      $('img').animate({left: '+=50px'});
    }
  }
};

function rtime() {
  nowt = new Date();
  var number = Math.floor(Math.random() * (2) + 1);
  return number;
}
