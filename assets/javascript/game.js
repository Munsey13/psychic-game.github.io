let wins = 0;
let losses = 0;
let guessesLeft = 9;
let lettersGuessed = [];
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let computerPick = letters[Math.floor(Math.random() *letters.length)];

function restart() {
    lettersGuessed = [];
    guessesLeft = 9;
    computerPick = letters[Math.floor(Math.random() *letters.length)];
    document.getElementById("guesses-text").innerHTML = guessesLeft;
}

function win() {
   wins++;
   alert("winner winner chicken dinner");
   document.getElementById("win-text").innerHTML = wins;
   restart(); 
}

function lost() {
    losses++;
    alert("stop while you are ahead");
    document.getElementById("lost-text").innerHTML = losses;
    restart();
}

function guessed() {
    let user = String.fromCharCode(event.keyCode).toLowerCase();
    lettersGuessed.push(user);
    document.getElementById("guessed-text").innerHTML = lettersGuessed;
}

document.onkeydown = function(){
 let key = String.fromCharCode(event.keyCode).toLowerCase();
 guessed()

 if (key === computerPick) {
     win();
 }  else {
    guessesLeft--;
    document.getElementById("guesses-text").innerHTML = guessesLeft;
 }

 if (guessesLeft === 0) {
     lost();
 }
}
