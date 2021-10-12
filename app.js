//Feilds for storing data
away = new Array(); //to store values
home = new Array();
awayTotal = 0;
homeTotal = 0;

//Functions:

function addTo() {
  alert(home_or_away);
}

function subFrom() {}

//Gets the total from an inputed array. Used to update home/away total
function getTotal(inputArray) {
  let total = 0;
  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
}

function playChicenSong() {
  var audio = new Audio("sounds/chickendance.mp3");
  audio.play();
}

function playRandomSong() {
  let randNumber = Math.floor(Math.random() * 3) + 1;
  var audio = new Audio();
  if (randNumber == 1) {
    var audio = new Audio("sounds/buildup.mp3");
  } else if (randNumber == 2) {
    var audio = new Audio("sounds/charge1.mp3");
  } else {
    var audio = new Audio("sounds/charge2.mp3");
  }
  audio.play();
}
