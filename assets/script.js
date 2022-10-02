var startBtn = document.querySelector("#start_btn");
var countDown = document.getElementById("#timer");
var timeQuestion = document.getElementById("#question");
var giveAnswer = document.getElementById("#answer")
var badAnswer = document.getElementById("incorrect")
var goodAnswer = document.getElementById("correct")
var scoreRank = document.getElementById("score-ranked");
var scoreCount = document.getElementById("score-count");
var scoreList = document.getElementById("score-list");
function startQuiz() {
    let startBtn = confirm("This is a timed multiple choice quiz that tests your knowledge in code. for every incorrect question, six seconds will be subtracted from the timer. Good luck.")
    if (startBtn) {
        var questionOne = false
        if (confirm) {

        } else {

        }




    }

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