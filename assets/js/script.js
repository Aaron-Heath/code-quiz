// Select Elements
var startBtn = document.querySelector("#quiz-start");
var questionBox = document.querySelector("#question-box");
var questionTitle = document.querySelector("#quiz-title");
var questionContent = document.querySelector("#question-content");
var timeEl = document.querySelector("#timer");
var questionOptions;
var questionFeedback;

// Set Global Variables
var questionSet = [];
var optionSet = [];
var questionCounter = 0;
var score = 0;
var timeLeft = 60;

// Declare Classes
class Question {
    constructor(text, options) {
        this.text = text;
        this.options = options;
    }
}

class Option {
    constructor(text,correct) {
        this.text = text;
        this.correct = correct;
    }
}


// Declare Functions
var renderQuestion = function() {
    if(questionCounter >= questionSet.length) {
        alert("quiz over!");
        return;
    }

    let currentQuestion = questionSet[questionCounter];
    try {
        questionOptions.innerHTML = "";
        questionFeedback.innerHTML = "";
    } catch (e) {
        console.log(e);
    }
    
    // Title
    questionTitle.textContent = currentQuestion.text;
    // Create list element
    questionOptions = document.createElement("ol");
    
    
    // Create list items for each option
    for(let option of currentQuestion.options) {
        // Create list element
        let listElement = document.createElement("li");
        // Set li text
        listElement.textContent = option.text;
        // Set li attributes
        listElement.setAttribute("data-validation",option.correct);
        listElement.setAttribute("class","quiz-btn");
        // Append LI to OL
        questionOptions.appendChild(listElement);
    }
    questionContent.setAttribute("style", "text-align: left;");
    questionBox.setAttribute("style", "align-items: start;");
    // Append OL to Content
    questionContent.appendChild(questionOptions);

    // Create feedback
    questionFeedback = document.createElement("p");
    questionFeedback.setAttribute("id", "feedback");
    questionBox.appendChild(questionFeedback); 

    questionCounter ++;

}

var evaluateAnswer = function(event) {
    var element = event.target;
    // Delegate event to li elements
    if(element.matches("li")) {
        // Boolean from string value
        let correctAnswer = element.dataset.validation === "true";

        if(correctAnswer) {
            score ++;
            questionFeedback.setAttribute("style", "color: green; font-size: 20px; font-weight: bold; font-style: italic;");
            questionFeedback.textContent = "Correct!";

        } else {
            questionFeedback.setAttribute("style", "color: red; font-size: 20px; font-weight: bold; font-style: italic;");
            questionFeedback.textContent = "Incorrect!";
            timeLeft -=10;            
        }
        
        setTimeout(renderQuestion,1000);
    } else {
        return;
    }
}

var setTime = function() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        if(timeLeft ===1 ) {
            timeEl.textContent = timeLeft + " second remaining";
        } else {
            timeEl.textContent = timeLeft + " seconds remaining";
        }

        if(timeLeft <=0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Times Up!";
        }
    },1000);
}

var init = function() {
    // ("Quiz has started!");
    // Build Quiz
    // Question 1
    optionSet.push(new Option("Square Brackets",false));
    optionSet.push(new Option("Parentheses", true));
    optionSet.push(new Option("Curly Brackets", false));
    optionSet.push(new Option("Quotation Marks", false));

    var question = new Question("Fill in the blank: The condition for an if/else statement must be enclosed in ________.",optionSet);
    questionSet.push(question);

    optionSet=[];

    // Question 2
    optionSet.push(new Option("Document Object Model", true));
    optionSet.push(new Option("Document Object Module",false));
    optionSet.push(new Option("Developer Orientation Manual", false));
    optionSet.push(new Option("Document Ordered Model", false));
    question = new Question("In Web Development, what does DOM stand for?", optionSet);
    questionSet.push(question);

    optionSet=[];

    // Question 3
    optionSet.push(new Option("Number", false));
    optionSet.push(new Option("String", false));
    optionSet.push(new Option("Boolean", false));
    optionSet.push(new Option("Confirm", true));
    question = new Question("Which of the following is not a primative data type in JavaScript?", optionSet);
    questionSet.push(question);

    optionSet = [];
    
    // Question 4
    optionSet.push(new Option("For...in loops", false));
    optionSet.push(new Option("Enumerate", false));
    optionSet.push(new Option("For loops", true));
    optionSet.push(new Option("While loops", false));

    question = new Question("Fill in the blank: In JavaScript, use _______ to iterate over the items in an array.", optionSet)
    questionSet.push(question);

    startBtn.remove();
    // questionContent.remove();
    questionContent.textContent = "";
    renderQuestion();
    setTime();
}



// Add Event Listeners
startBtn.addEventListener("click", init);
questionBox.addEventListener("click",evaluateAnswer);



