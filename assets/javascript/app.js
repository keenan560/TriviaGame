// Answer Key array

let answerKey = [
    "66",
    "12",
    "Abel",
    "Potiphar's",
    "King Saul",
    "Samson",
    "Michael",
    "All of the above",
    "Peter",
    "Revelation"
]
// Game variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = answerKey.length;;
var questionNum = 0;
var numOfQuestions = answerKey.length + 1;
let timer = function () {
    setInterval(decrementtSeconds, 1000);
}

//Timer variable and function

var seconds = 90;

function decrementtSeconds() {
    if (seconds !== 0) {
        seconds -= 1;
        $("#timer").html("Time Remaining: " + seconds + " seconds");
    } else {
        displayResults();
    }
}

function renderQuestion() {
    music.play(); 
    $(".jumbotron").hide();
    $(".card").show();
    $("#num-questions").html("Total No. of Questions: " + answerKey.length);
    $("#submit").append("<button  class='btn btn-lg p-4 ml-auto'>" + "Submit");
    timer();
}



$(".choices").click(function (event) {
    var userInput = event.target.value
    console.log(userInput);
})
function displayResults() {
    clearInterval(timer);
    $(".card").hide();
    $(".jumbotron").empty();
    $(".jumbotron").append("<h1>" + "Time is up! Let's see how you did:" + "<br>");
    $(".jumbotron").append("<h1 class='results'>" + "Correct Answers: " + correctAnswers + "<h1 class='results'>" + "Incorrect Answers: " + incorrectAnswers + "<h1 class='results'>" + "Unanswered Questions: " + unanswered);
    $(".jumbotron").append("<button onclick='document.location.reload()' id='restart'class='btn btn-lg p-4 mt-3'>" + "Restart");
    $(".jumbotron").show();

}

// Carousel

var i = 0;

var time = 7000 ;

var images = [];

images[1] = "assets/images/david.jpg";
images[2] = "assets/images/eden.jpg";
images[3] = "assets/images/eve.jpg";
images[4] = "assets/images/watercolor.jpeg";
images[5] = "assets/images/cain-abel.jpg";
images[6] = "assets/images/moses.jpg"
images[7] = "assets/images/michael.jpg";
images[8] = "assets/images/jesus-water.jpg";
images[9] = "assets/images/samson.jpg";
images[10] = "assets/images/fight.jpg";
images[11] = "assets/images/tower.jpg";

function changeBackground() {
    
    if (i < images.length - 1 ) {
        $('#background').fadeOut("fast", function () {
            $('body').css({
                'background-image': "url('" + images[i] + "')"
            });
            $('#background').fadeIn("fast");
        }); 
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeBackground, time);

}
// Music 
var music = new Audio('assets/audio/Calming-harp-music.mp3');
   


$(document).ready(function () {
   
    changeBackground();

    $(".card").hide();

    $("#submit").click(displayResults);

    $(".choices").click(function (event) {
        userInput = event.target.value
        console.log(userInput);
        if (answerKey.includes(userInput)) {
            unanswered -= 1;
            correctAnswers += 1;
        } else {
            unanswered -= 1;
            incorrectAnswers += 1;
        }
    })

})



