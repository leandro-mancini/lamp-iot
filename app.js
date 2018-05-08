var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  var rele = new five.Relay(8);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    rele: rele
  });

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyCMUTbGkvJgCwlSBY4HF8sMJAtO82M9Wo4",
    authDomain: "iot-tutorial-68db6.firebaseapp.com",
    databaseURL: "https://iot-tutorial-68db6.firebaseio.com",
    storageBucket: "iot-tutorial-68db6.appspot.com",
  };
  firebase.initializeApp(config);

  var starCountRef = firebase.database().ref('lampada');

  starCountRef.on('value', function(snapshot) {
    let lampada = snapshot.val();

    if(lampada == 'on'){
      led.on();
    } else{
      led.off();
    }
  });

});