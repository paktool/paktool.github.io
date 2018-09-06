$(document).ready(function(){
  const combination = {
    1:{
      1:"<p>  Sensor Achsen = Prüfling Achsen<br>+X = +Z<br>+Y = +Y<br>+Z = +X</p>",
      2:"<p>  Sensor Achsen = Prüfling Achsen<br>+X = -Z<br>+Y = -Y<br>+Z = +X</p>",
      3:"<p>  Sensor Achsen = Prüfling Achsen<br>+X = -Y<br>+Y = +Z<br>+Z = +X</p>",
      4:"<p>  Sensor Achsen = Prüfling Achsen<br>+X = +Y<br>+Y = -Z<br>+Z = +X</p>"},
    2:{
      1:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Z<br>+Y = -Y<br>+Z = -X</p>",
      2:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Z<br>+Y = +Y<br>+Z = -X</p>",
      3:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Y<br>+Y = +Z<br>+Z = -X</p>",
      4:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Y<br>+Y = -Z<br>+Z = -X</p>"},
    3:{
      1:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Z<br>+Y = -X<br>+Z = +Y</p>",
      2:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Z<br>+Y = +X<br>+Z = +Y</p>",
      3:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +X<br>+Y = +Z<br>+Z = +Y</p>",
      4:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -X<br>+Y = -Z<br>+Z = +Y</p>"},
    4:{
      1:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Z<br>+Y = +X<br>+Z = -Y</p>",
      2:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Z<br>+Y = -X<br>+Z = -Y</p>",
      3:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -X<br>+Y = +Z<br>+Z = -Y</p>",
      4:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +X<br>+Y = -Z<br>+Z = -Y</p>"},
    5:{
      1:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -X<br>+Y = +Y<br>+Z = +Z</p>",
      2:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +X<br>+Y = -Y<br>+Z = +Z</p>",
      3:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Y<br>+Y = -X<br>+Z = +Z</p>",
      4:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Y<br>+Y = +X<br>+Z = +Z</p>"},
    6:{
      1:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -X<br>+Y = -Y<br>+Z = -Z</p>",
      2:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +X<br>+Y = +Y<br>+Z = -Z</p>",
      3:"<p>Sensor Achsen = Prüfling Achsen<br>+X = +Y<br>+Y = -X<br>+Z = -Z</p>",
      4:"<p>Sensor Achsen = Prüfling Achsen<br>+X = -Y<br>+Y = +X<br>+Z = -Z</p>"}
  };
  $("#parent").on("change", function(event) {
    $("#children").html("");
    $("#result").html("");
    var parent = event.target.value
    if(parent != "default"){
      $("#children").append("<h3 id='select'>Wählen Sie eine Sensorkonfiguration</h3><img id='1' src='images/1.png' style='margin: 3px;'><img id='2' src='images/2.png' style='margin: 3px;'><img id='3' src='images/3.png' style='margin: 3px;'><img id='4' src='images/4.png' style='margin: 3px;'>");
    }
  });
  $("#children").on("click", function(event) {
    $("#result").html("");
    var child = event.target.id
    if(child != "select" && child != "children"){
      $("#result").append("<h3><b><u>Ergebnis</u></b></h3><br>" + combination[$("#parent").val()][child]);
    }
  });
  $("#reset_btn").on("click", function(event){
    $("#parent").val("default");
    $("#children").html("");
    $("#result").html("");
  });
});

if ('serviceWorker' in navigator) {
  if(navigator.serviceWorker.controller)
  {
    console.log('Active service worker found, no need to register')
  }
  else
  {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
  }
}
