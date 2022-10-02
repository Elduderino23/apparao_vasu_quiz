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
        timeQuestion.textContent = "Question 1"
        firstOption.textContent = "option 1"
        secondOption.textContent = "option 2"
        thirdOption.textContent = "option 3"
        fourthOption.textContent = "option 4"

    }
    if (secondPrompt) {
        timeQuestion.textContent = "Question 2"
        firstOption.textContent = "option 1"
        secondOption.textContent = "option 2"

    }

}
function nextQuestion() {
    alert("Next Question")
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