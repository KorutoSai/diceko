//For choosing dice type
function selectType() {
    window.location = document.getElementById('select_location').value;
}

//Dice algorithm

function roll() {
    let dice = Math.random();
    dice = dice * 6;
    dice = Math.floor(dice) + 1;
    return dice

}

//Dice function

let play = document.getElementById("play");


function rollActual() {

    const diceOneVal = roll() //1st dice

    const img = "/image/6digit dice/" + diceOneVal + ".jpg"
    document.getElementById("diceImg").src = img



    const diceTwoVal = roll() //2nd dice


    const img2 = "/image/6digit dice/" + diceTwoVal + ".jpg"
    document.getElementById("diceImg2").src = img2


    //announcer

    const diceTotal = diceOneVal + diceTwoVal
        document.getElementById("announcer").innerHTML = "Total value rolled is " + diceTotal;





    

    //dice audio
    const audio = new Audio("/audio/dice-142528.mp3");
    audio.play()

} 