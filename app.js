//Feilds for storing data
var Away = new Array(); //to store values
var Home = new Array();
awayTotal = 0;
homeTotal = 0;

//initalize arrays
for (let i = 0; i < 8; i++) {
  Away.push(0);
  Home.push(0);
}
//Functions:

function addTo() {
  var target = Home_or_Away.value; //Home or away
  var number = parseInt(inning.value); //The inning

  if (target == "Away") {
    let tempNum = Away[number] + 1;
    Away.splice(number,1,tempNum);
    
    
    let templist = document.querySelectorAll('td[id^="away"]');//groups all tags together
    templist[number-1].innerHTML = Away[number];

    
      
    //innerHTML(Away[number]); //get specific
   // alert(templist);

    //updates tag

  } else {
    //do the same but for Home
  }
}

function subFrom() {} //make sure to not allow negative numbers

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

  document.getElementById("mainImage").src = "images/sdchicken.jpg";
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

  // let imageSwitch = document.querySelector(mainImage);
  // imageSwitch.replaceWith
  // imageSwitch.innerHTML = images / megaphone.png

  //document selector
  document.getElementById("mainImage").src = "images/megaphone.png";
  
  document.querySelectorAll("mainImage").src = "images/megaphone.png";
  


}
