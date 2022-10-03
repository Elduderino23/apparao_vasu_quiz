var startBtn = document.querySelector("#start_btn");
var countDown = document.getElementById("timer");
var timeLeft = 60;
var incorrectAnswer = 0;
var correctAnswer = 0;
var i = 0;
var timeInterval;
var timeQuestion = document.getElementById("question");
var giveAnswer = document.getElementById("answer")
var badAnswer = document.getElementById("incorrect")
var goodAnswer = document.getElementById("correct")
var scoreRank = document.getElementById("score-ranked");
var scoreCount = document.getElementById("score-count");
var scoreList = document.getElementById("score-list");
var firstOption = document.getElementById("option_1");
var secondOption = document.getElementById("option_2");
var thirdOption = document.getElementById("option_3");
var fourthOption = document.getElementById("option_4");
// var playAgain = document.getElementById("try-again")
var question1 = ["Question 1: What is a prompt()?", "(a) displays a dialog button that prompts the user for inspection", "(b) displays a dialog button that prompts the user for direction", "(c) displays a dialog button that prompts the user for input", "(d) displays a dialog button that prompts the user for output", "c"]
var question2 = ["Question 2: What is an Array?", "(a) a special variable which holds more than five values", "(b) a special variable which holds more than one value", "(c) a special variable which holds less than one value", "(d) a variable which holds more than one value", "b"]
var question3 = ["Question 3: What are semantic HTML?", "(a) element that clearly describes its value in both browser and the developer", "(b) element that clearly describes its shape in both browser and the developer", "(c) element that clearly describes its code in both browser and the developer", "(d) element that clearly describes its meaning in both browser and the developer", "d"]
var question4 = ["Question 4: What are HTML Elements?", "(a) elements defined by start tag, some content, and an end tag", "(b) elements defined by start point, some content, and an end tag", "(c) elements defined by starter, some content, and an end tag", "(d) elements defined by start tag, some content, and an end", "a"]
var question5 = ["Question 5: What is a CSS Box Model?", "(a) a box that wraps around an HTML element", "(b) a box that wraps around every HTML", "(c) a box that wraps around some HTML element", "(d) a box that wraps around every HTML element", "d"]
var question6 = ["Question 6: What is a <br> tag?", "(a) tag inserts a basic rule", "(b) tag inserts a line break", "(c) tag inserts a breakpoint", "(d) tag inserts a line", "b"]
var question7 = ["Question 7: What is an alert box?", "(a) a box often used if you want data got through to the user", "(b) a box often used if you want facts got through to the user", "(c) a box often used if you want info got through to the user", "(d) a box often used if you want things got through to the user", "c"]
var question8 = ["Question 8: What is DOM?", "(a) Document Object Model", "(b) Document Object Method", "(c) Document Open Model", "(d) Document Object Minimum", "a"]
var question9 = ["Question 9: What is concat()?", "(a) Concatenates two or more elements", "(b)  Concatenates two or more items", "(c) Concatenates two or more objects", "(d) Concatenates two or more arrays", "d"]
var question10 = ["Question 10: What is JSON?", "(a) Javascript Opinion Notion", "(b) Javascript Option Notion", "(c) Javascript Source Object Notion", "(d) Javascript Object Notion", "d"]
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var currentAnswer = question1[5]
function startQuiz() {
    shotClock();
    nextQuestion(event);
}

function displayQuestion(currentQuestion) {
    timeQuestion.textContent = currentQuestion[0];
    firstOption.textContent = currentQuestion[1];
    secondOption.textContent = currentQuestion[2];
    thirdOption.textContent = currentQuestion[3];
    fourthOption.textContent = currentQuestion[4];
    currentAnswer = currentQuestion[5];

}
function nextQuestion(event) {
    var currentQuestion = questions[i];
    var checkAnswer = event.target.value;
    console.log(checkAnswer)
    console.log(currentAnswer)
    if (checkAnswer == currentAnswer) {
        correctAnswer++;
    } else {
        incorrect++;
        timeLeft -= 6;
    }
    if (i < questions.length) {
        displayQuestion(currentQuestion);
    }
    badAnswer.textContent = incorrectAnswer;
    goodAnswer.textContent = correctAnswer;
    console.log(correctAnswer);
    i++;
}

function shotClock() {
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
            countDown.textContent = timeLeft;
        } else {
            clearInterval(timeInterval);

            // displayMessage();
        }
    }, 1000);
}
// function endQuiz(event) {
//     console.log(event.target)
// let endScreen = document.getElementById("scoreboard")
// endScreen.removeAttribute()
//     if (i > question1.length) {

//         then
//     }


// }

startBtn.addEventListener("click", startQuiz);
firstOption.addEventListener("click", nextQuestion);
secondOption.addEventListener("click", nextQuestion);
thirdOption.addEventListener("click", nextQuestion);
fourthOption.addEventListener("click", nextQuestion);
// playAgain.addEventListener("click", startQuiz)