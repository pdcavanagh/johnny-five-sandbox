var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }

  var led = five.Led([13, 12, 11, 10, 9]);
  //console.log(led);

  var secBin = 0;
  var secLed = '';
  
  setInterval(function updateTime() {
    var d = new Date();
    secBin = dec2bin(d.getSeconds());
    secLed = secBin.split('').reverse();
    //console.log(secLed); 
    for(i=9; i<14; i++) {
      led.pin = i;
      if(secLed[13-i]=='1'){
        led.on();
      }
      else {
        led.off();
      }
    }
  }, 100);

});
