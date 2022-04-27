var rain_url = 'https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D';

var rain = $.getJSON(rain_url);
rain.done(function(result){
  $.each(result,function(i,item){
    $.each(result,function(j,s){
      if(j>=0) {
      //console.log(i,item.data[s].stationNo);
      $('#station').append($('<div>' + item.data[s].stationName + '('+
                           item.data[s].stationNo +')</div>'))
      $('#Time').append($('<div>' + item.data[s].recTime + '</div>'))
      $('#rainnum').append($('<div>' + item.data[s].rain + '</div>'))
      }
    });
  });
});