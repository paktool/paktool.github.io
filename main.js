$(document).ready(function(){
  const combination = {
    1:{
      1:"<p>1.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>1.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>1.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>1.4 answer line 1<br>answer line 2<br>answer line 3</p>"},
    2:{
      1:"<p>2.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>2.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>2.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>2.4 answer line 1<br>answer line 2<br>answer line 3</p>"},
    3:{
      1:"<p>3.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>3.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>3.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>3.4 answer line 1<br>answer line 2<br>answer line 3</p>"},
    4:{
      1:"<p>4.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>4.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>4.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>4.4 answer line 1<br>answer line 2<br>answer line 3</p>"},
    5:{
      1:"<p>5.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>5.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>5.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>5.4 answer line 1<br>answer line 2<br>answer line 3</p>"},
    6:{
      1:"<p>6.1 answer line 1<br>answer line 2<br>answer line 3</p>",
      2:"<p>6.2 answer line 1<br>answer line 2<br>answer line 3</p>",
      3:"<p>6.3 answer line 1<br>answer line 2<br>answer line 3</p>",
      4:"<p>6.4 answer line 1<br>answer line 2<br>answer line 3</p>"}
  };
  $("#parent").on("change", function(event) {
    $("#children").html("");
    $("#result").html("");
    var parent = event.target.value
    if(parent != "default"){
      $("#children").append("<h3 id='select'>Click one child from below Images</h3><img id='1' src='images/1.png' style='margin: 3px;'><img id='2' src='images/2.png' style='margin: 3px;'><img id='3' src='images/3.png' style='margin: 3px;'><img id='4' src='images/4.png' style='margin: 3px;'>");
    }
  });
  $("#children").on("click", function(event) {
    $("#result").html("");
    var child = event.target.id
    if(child != "select" && child != "children"){
      $("#result").append("<h3><b><u>Result</u></b></h3><br>" + combination[$("#parent").val()][child]);
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