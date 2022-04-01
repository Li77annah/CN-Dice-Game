let dicePic = document.getElementById("dicePic");
const btnRoll = document.getElementById("btnRoll");

let total = document.getElementById("playerTotal");
let display = document.getElementById("display");
let playerTotal = 0;

let dice = [
    { value: 1, img: "Images/dice1.png"},
    { value: 2, img: "Images/dice2.png"},
    { value: 3, img: "Images/dice3.png"},
    { value: 4, img: "Images/dice4.png"},
    { value: 5, img: "Images/dice5.png"},
    { value: 6, img: "Images/dice6.png"},
];

dicePic.src = dice[0].img;

const reset = () => {
    btnRoll.textContent = ("NEW GAME?");
    playerTotal = 0;
    total.innerHTML = (playerTotal);
}

btnRoll.addEventListener('click', () => {
    let player = dice[Math.floor((Math.random() * dice.length))];
    dicePic.src = player.img;
    btnRoll.textContent = ("ROLL THE DICE");
    display.textContent = ("ROLL AGAIN");
    if (player.value == 1) {
        display.textContent = ("OH NO! BETTER LUCK NEXT TIME");
        reset();
    } else {
        playerTotal += player.value;
        total.textContent = (playerTotal);
    }
    if (playerTotal >= 20) {
        display.textContent = ("WELL DONE WINNER!");
        btnRoll.textContent = ("NEW GAME?");
        reset();
    }
});


	
	
	
	
	