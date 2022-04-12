var ABC = {
  'A': 'A.png',
  'B': 'B.png',
  'C': 'C.png',
  'D': 'D.png',
  'E': 'E.png',
  'F': 'F.png',
  'G': 'G.png',
  'H': 'H.png',
  'I': 'I.png',
  'J': 'J.png',
  'K': 'K.png',
  'L': 'L.png',
  'M': 'M.png',
  'N': 'N.png',
  'O': 'O.png',
  'P': 'P.png',
  'Q': 'Q.png',
  'R': 'R.png',
  'S': 'S.png',
  'T': 'T.png',
  'U': 'U.png',
  'V': 'V.png',
  'W': 'W.png',
  'X': 'X.png',
  'Y': 'Y.png',
  'Z': 'Z.png'
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
