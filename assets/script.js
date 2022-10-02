var startBtn = document.querySelector("#start_btn");
var countDown = document.getElementById("timer");
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
function startQuiz() {
    let startPrompt = confirm("This is a timed multiple choice quiz that tests your knowledge in code. for every incorrect question, six seconds will be subtracted from the timer. Good luck.")
    if (startPrompt) {
        timeQuestion.textContent = "Question 1: What is a prompt()?"
        firstOption.textContent = "(a) displays a dialog button that prompts the user for inspection"
        secondOption.textContent = "(b) displays a dialog button that prompts the user for direction"
        thirdOption.textContent = "(c) displays a dialog button that prompts the user for input"
        fourthOption.textContent = "(d) displays a dialog button that prompts the user for output"

    }
    if (secondPrompt) {
        timeQuestion.textContent = "Question 2: What is an Array?"
        firstOption.textContent = "(a) a special variable which holds more than five values"
        secondOption.textContent = "(b) a special variable which holds more than one value"
        thirdOption.textContent = "(c) a special variable which holds less than one value"
        fourthOption.textContent = "(d) a variable which holds more than one value"

    }
    if (thirdPrompt) {
        timeQuestion.textContent = "Question 3: What are semantic HTML?"
        firstOption.textContent = "(a) element that clearly describes its value in both browser and the developer"
        secondOption.textContent = "(b) element that clearly describes its shape in both browser and the developer"
        thirdOption.textContent = "(c) element that clearly describes its code in both browser and the developer"
        fourthOption.textContent = "(d) element that clearly describes its meaning in both browser and the developer"


    }
    if (fourthPrompt) {
        timeQuestion.textContent = "Question 4: What are HTML Elements?"
        firstOption.textContent = "(a) elements defined by start tag, some content, and an end tag"
        secondOption.textContent = "(b) elements defined by start point, some content, and an end tag"
        thirdOption.textContent = "(c) elements defined by starter, some content, and an end tag"
        fourthOption.textContent = "(d) elements defined by start tag, some content, and an end"


    }
    if (fifthPrompt) {
        timeQuestion.textContent = "Question 5: What is a CSS Box Model?"
        firstOption.textContent = "(a) a box that wraps around an HTML element"
        secondOption.textContent = "(b) a box that wraps around every HTML"
        thirdOption.textContent = "(c) a box that wraps around some HTML element"
        fourthOption.textContent = "(d) a box that wraps around every HTML element"


    }
    if (sixthPrompt) {
        timeQuestion.textContent = "Question 6: What is a <br> tag?"
        firstOption.textContent = "(a) tag inserts a basic rule"
        secondOption.textContent = "(b) tag inserts a line break"
        thirdOption.textContent = "(c) tag inserts a breakpoint"
        fourthOption.textContent = "(d) tag inserts a line"


    }
    if (seventhPrompt) {
        timeQuestion.textContent = "Question 7: What is an alert box?"
        firstOption.textContent = "(a) a box often used if you want data got through to the user"
        secondOption.textContent = "(b) a box often used if you want facts got through to the user"
        thirdOption.textContent = "(c) a box often used if you want info got through to the user"
        fourthOption.textContent = "(d) a box often used if you want things got through to the user"


    }
    if (eighthPrompt) {
        timeQuestion.textContent = "Question 8: What is DOM?"
        firstOption.textContent = "(a) Document Object Model"
        secondOption.textContent = "(b) Document Object Method"
        thirdOption.textContent = "(c) Document Open Model"
        fourthOption.textContent = "(d) Document Object Minimum"


    }
    if (ninthPrompt) {
        timeQuestion.textContent = "Question 9: What is concat()?"
        firstOption.textContent = "(a) Concatenates two or more elements"
        secondOption.textContent = "(b) Concatenates two or more items"
        thirdOption.textContent = "(c) Concatenates two or more objects"
        fourthOption.textContent = "(d) Concatenates two or more arrays "


    }
    if (tenthPrompt) {
        timeQuestion.textContent = "Question 10: What is JSON?"
        firstOption.textContent = "(a) Javascript Opinion Notion"
        secondOption.textContent = "(b) Javascript Option Notion"
        thirdOption.textContent = "(c) Javascript Source Object Notion"
        fourthOption.textContent = "(d) Javascript Object Notion"


    }

    function nextQuestion() {
        confirm("Next Question")



    }

    // function countdown() {
    //     var timeLeft = 5;

    //     var timeInterval = setInterval(function () {
    //         if (timeLeft > 1) {
    //             timerEl.textContent = timeLeft + ' seconds remaining';
    //             timeLeft--;
    //         } else if (timeLeft === 1) {
    //             timerEl.textContent = timeLeft + ' second remaining';
    //             timeLeft--;
    //         } else {
    //             timerEl.textContent = '';
    //             clearInterval(timeInterval);

    //             displayMessage();
    //         }
    //     }, 1000);
    // }


    startBtn.addEventListener("click", startQuiz);
    firstOption.addEventListener("click", nextQuestion)
    secondOption.addEventListener("click", nextQuestion)
    thirdOption.addEventListener("click", nextQuestion)
    fourthOption.addEventListener("click", nextQuestion)