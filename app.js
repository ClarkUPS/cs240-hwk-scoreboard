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
//Adds to the total and values in the table and updates total in respective rows
function addTo() {
  let target = Home_or_Away.value; //Home or away
  let number = parseInt(inning.value); //The inning

  if (target == "Away") {
    let tempNum = Away[number] + 1; 
    Away.splice(number,1,tempNum);
    
    let templist = document.querySelectorAll('td[id^="away"]');//groups all tags together
    templist[number - 1].innerHTML = Away[number];
    
    //Add to R
    awayTotal++
    templist[7].innerHTML = awayTotal;
    
    //Does the same for Home
  } else {
    let tempNum = Home[number] + 1;
    Home.splice(number, 1, tempNum);


    let templist = document.querySelectorAll('td[id^="home"]');//.Group all home ids
    templist[number - 1].innerHTML = Home[number];

    //Add to R
    homeTotal++
    templist[7].innerHTML = homeTotal;
  }
}

//Subtracts from score board and updates total in respective rows
function subFrom() {
  let target = Home_or_Away.value; //Home or away
  let number = parseInt(inning.value); //The inning
  //Check which row to put in
  if (target == "Away") {
    let tempNum = Away[number]
    //Make sure cannot go negative
    if (tempNum > 0) {
      let tempNum = Away[number] - 1; 
    Away.splice(number,1,tempNum);
    
    let templist = document.querySelectorAll('td[id^="away"]');//groups all tags together
    templist[number - 1].innerHTML = Away[number];
    
    //Sub from R
    awayTotal--
    templist[7].innerHTML = awayTotal;

    }
    //does the same for Home
  } else {
    let tempNum = Home[number];

    if (tempNum > 0) {
      let tempNum = Home[number] - 1;
      Home.splice(number, 1, tempNum);
      
      let templist = document.querySelectorAll('td[id^="home"]')
      templist[number - 1].innerHTML = Home[number];
      
      //Sub from R
      homeTotal--
      templist[7].innerHTML = homeTotal;
    }
  }


} 

//Plays the chicken song when clicked
function playChicenSong() {
  var audio = new Audio("sounds/chickendance.mp3");
  audio.play();

  document.getElementById("mainImage").src = "images/sdchicken.jpg";
}

//Plays a random build up/charge song
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

  document.getElementById("mainImage").src = "images/megaphone.png";
}
