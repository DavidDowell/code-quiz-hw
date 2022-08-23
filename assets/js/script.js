var startQuizEl = $("#start-quiz");
var wrongBtnEl = $("#wrong");
var wrongBtnElB = $("#wrong-b")
var wrongBtnElC = $("#wrong-c")
var correctBtnEl = $("#correct");
var nextBtnEl = $("#next-q");

startQuizEl.on("click", function() {
    location.replace("file:///Users/dd/Desktop/hw/code-quiz-hw/first.html");
})

function showWrong(event) {
    var wrongBtnEl = $(event.target);
    
    wrongBtnEl.append(
        "<h4 class='hidden'>Wrong!</h4>"
    )
}

function showWrongB(event) {
    var wrongBtnElB = $(event.target);
    wrongBtnElB.append(
        "<h4 class='hidden'>Wrong!</h4>"
    );
    return;
}

function showWrongC(event) {
    var wrongBtnElC = $(event.target);
    wrongBtnElC.append(
        "<h4 class='hidden'>Wrong!</h4>"
    );
    return;
}

function showRight(event) {
    var correctBtnEl = $(event.target);
    correctBtnEl.append(
        "<h4 class='hidden'>Correct!</h4>"
    )
    
}

nextBtnEl.on("click", function() {
    location.replace("file:///Users/dd/Desktop/hw/code-quiz-hw/second.html");
})




wrongBtnEl.on("click", showWrong);
wrongBtnElB.on("click", showWrongB);
wrongBtnElC.on("click", showWrongC);
correctBtnEl.on("click", showRight);