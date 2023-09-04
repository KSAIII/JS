const prompt = require("prompt-sync")();
const target =  Math.round(Math.random() * 90);
let guesses = 0;
while(true)
{
    guesses++;
const guess = Number(prompt("guess the number (0-100):"));
if(guess > target)
{
    console.log("your guess is too high")
}
else if(guess < target)
{
    console.log("your guess too low");
}
else
{
    console.log("you guessed it");
    break
}
}
console.log("you gueesed the number in ",guesses,"tries!");