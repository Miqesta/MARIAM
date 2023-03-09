function showSecondHeader() {
  document.getElementById("first-header").style.display = "none";
  document.getElementById("second-header").style.display = "block";
}

function showThirdHeader() {
  document.getElementById("second-header").style.display = "none";
  document.getElementById("third-header").style.display = "block";
}

function showFourthHeader() {
  document.getElementById("third-header").style.display = "none";
  document.getElementById("fourth-header").style.display = "block";
}

function showFifthHeader() {
  document.getElementById("fourth-header").style.display = "none";
  document.getElementById("fifth-header").style.display = "block";
}

function startAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
  document.getElementById("fifth-header").style.display = "none";
  document.getElementById("sixth-header").style.display = "block";
}


function showFinalMessage() {
  document.getElementById("sixth-header").style.display = "none";}
  
