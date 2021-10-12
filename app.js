//Feilds for storing data
away = new Array() //to store values 
home = new Array()
awayTotal = 0
homeTotal = 0


//Functions:

function addTo() {
    alert(home_or_away)

}

function subFrom() {
    

}

//Gets the total from an inputed array. Used to update home/away total
function getTotal(inputArray) {
    let total = 0;
    for (let i = 0; i < inputArray.length; i++) {
        total += inputArray[i];
    }
    return total;
}
