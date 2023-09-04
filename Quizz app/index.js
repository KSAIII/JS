const prompt = require("prompt-sync")();
console.log("welcome to the quiz!")
const answer1 = prompt("what is the brain of the computer? ");
const correct_answer1 = "CPU";
const totalquestions = 3;
let correct_answers = 0;

if(answer1.toUpperCase() === correct_answer1)
{
    console.log("you are correct");
    correct_answers++;
}
else
{
    console.log("you are wrong!");
}
const answer2 = prompt("which is8 better macbook or windows? ");
const correct_answer2 = "windows";
if(answer2.toUpperCase() === correct_answer1)
{
    console.log("you are correct");
    correct_answers++;
}
else
{
    console.log("you are wrong!");
}
const answer3 = prompt("what is recomended ram in 2023 ");
const correct_answer3 = "16GB";
if(answer3.toUpperCase() === correct_answer3)
{
    console.log("you are correct");
    correct_answers++;
}

else
{
    console.log("you are wrong!");
}
const percent = Math.round((correct_answers/totalquestions) * 100);
console.log("you got",correct_answers,"questions correct");
console.log("The score of this quiz is ",percent,"percent");
