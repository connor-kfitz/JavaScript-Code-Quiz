//Declare variables for html elemnts
var startButton = document.querySelector("#startButton");
var startPage = document.querySelector(".startPage");

var timeEl = document.querySelector(".time");

var firstQuestionPage = document.querySelector('.firstQuestionPage');
var q1a1 = document.querySelector('#q1a1');
var q1a2 = document.querySelector('#q1a2');
var q1a3 = document.querySelector('#q1a3');
var q1a4 = document.querySelector('#q1a4');


var secondQuestionPage = document.querySelector('.secondQuestionPage');
var q2a1 = document.querySelector('#q2a1');
var q2a2 = document.querySelector('#q2a2');
var q2a3 = document.querySelector('#q2a3');
var q2a4 = document.querySelector('#q2a4');


var thirdQuestionPage = document.querySelector('.thirdQuestionPage');
var q3a1 = document.querySelector('#q3a1');
var q3a2 = document.querySelector('#q3a2');
var q3a3 = document.querySelector('#q3a3');
var q3a4 = document.querySelector('#q3a4');

var endPage = document.querySelector('.endPage');
var finalscore = document.querySelector("#finalscore");
var restartButton = document.querySelector('#restartButton');
var saveButton = document.querySelector('#saveButton');

var quizEnd = false;

var wrongAnswer = false;

// Timer


function countdown(){
    var secondsLeft = 20;

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(wrongAnswer){
            wrongAnswer = false;
            secondsLeft = (secondsLeft- 5);
        }
        else if (quizEnd) {
            finalscore.textContent = "Your final score is " + secondsLeft;
            clearInterval(timeInterval);  
        }
        else if (secondsLeft <= 0){
            quizEnd = true;
            clearInterval(timeInterval);
            finalscore.textContent = "Your final score is " + secondsLeft;
            pageArray = [firstQuestionPage, secondQuestionPage, thirdQuestionPage];
            firstQuestionPage.setAttribute('style', 'display:none;');
            secondQuestionPage.setAttribute('style', 'display:none;');
            thirdQuestionPage.setAttribute('style', 'display:none;');
            endPage.setAttribute('style', 'display:block;');
        }
      }, 1000);
}

//Next Page Activation
startButton.addEventListener('click', function(){
    timeEl.textContent = "10";
    startPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    countdown();
})

q1array = [q1a1, q1a2, q1a3, q1a4];
for(var i=0; i < 4; i++) {
    if (i==0){
        q1array[i].addEventListener('click', function(){
        firstQuestionPage.setAttribute('style', 'display:none;');
        secondQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q1array[i].addEventListener('click', function(){
        wrongAnswer = true;
        })
    }
}

q2array = [q2a1, q2a2, q2a3, q2a4];
for(var i=0; i < 4; i++) {
    if (i==1){
        q2array[i].addEventListener('click', function(){
        secondQuestionPage.setAttribute('style', 'display:none;');
        thirdQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q2array[i].addEventListener('click', function(){
        wrongAnswer = true;
        })
    }
}

q3array = [q3a1, q3a2, q3a3, q3a4];
for(var i=0; i < 4; i++) {
    if (i==2){
        q3array[i].addEventListener('click', function(){
        thirdQuestionPage.setAttribute('style', 'display:none;');
        endPage.setAttribute('style', 'display:block;');
        quizEnd = true;
        })
    }   
    else {
        q3array[i].addEventListener('click', function(){
        wrongAnswer = true;
        })
    }
}

restartButton.addEventListener('click', function(){
    timeEl.textContent = "20";
    endPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    quizEnd = false;
    countdown();
})

// startButton.addEventListener('click', function(){
// })


