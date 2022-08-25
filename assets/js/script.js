var startQuizEl = $("#start-quiz");
var startScreenDivEl = $('#start-screen');
var wrongBtnEl = $(".L");
var correctBtnEl = $(".W");
var timerEl = document.getElementById('time-left');
var score = $("#final-score");

var questionClassArr = ['.hidden-1', '.hidden-2', '.hidden-3', '.hidden-4', '.hidden-5',]
var Done = $(".hidden-6")
var questionIndex = 0;

var secondsleft = 80;
var holdInterval = 0;
var penalty = 10;
var reward = 5


startQuizEl.on("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(() => {
            secondsleft--
            timerEl.textContent = "Time: " + secondsleft;
                if (secondsleft <= 0) {
                    clearInterval(holdInterval)
                    console.log('done')
                    timerEl.textContent = "GAME OVER!"
                }
        }, 1000);
    }
    startScreenDivEl.addClass('hidden');
    displayQuestion();
});

var displayQuestion = () => {
    var el = $(questionClassArr[questionIndex]).removeClass('hidden');
};

var handleAnswerClick = (event) => {
    var value = event.target.value;
    // do stuff

    if (value !== 'true') {
        console.log('secondsleft', secondsleft)
        secondsleft = secondsleft - 10;
        // tell user they are wrong

    } else {
        // tell user they are right
    }

    
    $(questionClassArr[questionIndex]).addClass('hidden')
    questionIndex = questionIndex + 1;
    if (secondsleft < 0 || questionIndex === questionClassArr.length) {
        if (secondsleft < 0) secondsleft = 0;
        console.log('end quiz', secondsleft);
        timerEl.textContent = "Time: " + secondsleft;
        clearInterval(holdInterval)
        allDone();

        return
    }
    displayQuestion();
};

var allDone = function() {
    Done.removeClass('hidden');
}

$(document).on('click', '.answer-btn', handleAnswerClick);


var someVal = JSON.parse(localStorage.getItem('someName')) || [];
someVal.push({
    name: 'somename',
    value: secondsleft,
})
localStorage.setItem('someName', JSON.stringify(someVal))

// var timeLeft = 90;
// function countDown() {

//     if (timeLeft >= 1) {
//         timerEl.textContent = 'Time: ' + timeLeft;
//         timeLeft--;
//     } else {
//         timerEl.textContent = 'GAME OVER'
//         clearInterval(timerId)
//     }
//     localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
// };




