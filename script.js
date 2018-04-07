console.log("Let's Play NIM!");

var nimBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
var player = 'Player 1';

//print nimboard
//have player choose 1, 2 or 3 rocks
//check for winner
//change player



function printNimBoard() {
    console.log(nimBoard);
    console.log('_________________________________________________________________________________________');
}
printNimBoard();

function removeRocks(rocksToBeRemoved) {
    nimBoard.splice(0, rocksToBeRemoved);
    printNimBoard();
}

//A different way to switch player turns is by toggling booleans:
//EX. var isPlayerOnesTurn = true;
//    isPlayerOnesTurn = !isPlayerOnesTurn;

function playerTurn() {
    if (player === 1) {
        player = 2;
    }else {
        player = 1;
    }
}


function playerAction () {
    var chooseRocks = parseInt(prompt("How many rocks do you choose? 1, 2, or 3?"))
    if (chooseRocks === 1) {
        removeRocks(1);
    }else if (chooseRocks === 2) {
        removeRocks(2);
    }else if (chooseRocks === 3) {
        removeRocks(3);
    }else {
        console.log("Please choose again: 1, 2 or 3 rocks?")
    }
    playerTurn();
}


function checkVictory() {
    if (nimBoard.length <= 3) {
        console.log(player + " WINS!")
    }else {
        console.log("There are still rocks to be chosen");
        return "There are still rocks to be chosen";
    }
}


while (checkVictory() == "There are still rocks to be chosen") {
    playerAction();
}