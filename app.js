//Feilds for storing data
var away = new Array(); //to store values
var home = new Array();
awayTotal = 0;
homeTotal = 0;

//initalize arrays
for (let i = 0; i < 8; i++) {
  away.push(0);
  home.push(0);
}


//Functions:

function addTo() {
  var mainTable = document.getElementById("innerTable");
  let target = Home_or_Away.value; //Home or away
  let number = inning.value; //The inning

  if (target == "Away") {

    away.splice(target,1,away[target-1]+1) ;
    alert(away);
  } else {
  }
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
  if (randNumber == 1) {
    var audio = new Audio("sounds/buildup.mp3");
  } else if (randNumber == 2) {
    var audio = new Audio("sounds/charge1.mp3");
  } else {
    var audio = new Audio("sounds/charge2.mp3");
  }
  audio.play();

  let imageSwitch = document.querySelector(mainImage);
  imageSwitch.innerHTML = images/megaphone.png


}
