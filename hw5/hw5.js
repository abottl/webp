var price_url =
    'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=30&%24format=JSON';

var timedata_url =
    'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON';

var stationdata_url =
    'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON';

var stationdata = $.getJSON(stationdata_url);
stationdata.done(function(resultstation) {
  $.each(resultstation, function(k, z) {
    // console.log(k,z.StationName.Zh_tw);
    $('#Station').append($('<div> A' + (k + 1) + z.StationName.Zh_tw + '</div>'))
  });
});

var price = $.getJSON(price_url);
price.done(function(resultprice) {
  $.each(resultprice, function(e, x) {
    if (e < 20) {
      // console.log(e,x.Fares[0].Price);
      $('#Price').append($('<div>' + x.Fares[0].Price + '</div>'))
    }
  })
});

var timedata = $.getJSON(timedata_url);
var number = [];
var num = 0;
var count = 20;
for (var i = 0; i < 21; i++) {
  if (count > 0) {
    number.push(num);
    num = num + count;
    count--;
  }
}
timedata.done(function(resulttime) {
  $.each(resulttime, function(j, y) {
    if (j == 0) {
      $.each(number, function(x, number) {
        console.log(j, y.TravelTimes[number].RunTime);
        $('#Time').append(
            $('<div>A' + (x + 1) + '>>A' + (x + 2) + ' ' +
              y.TravelTimes[number].RunTime + '</div>'))
      })
    }
  });
});
