// Select Elements
var startBtn = document.querySelector("#quiz-start");
var questionSet = [];
var optionSet = [];

// Declare Classes Variables
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
var startQuiz = function() {
    alert("Quiz has started!");
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

    optionSet=[];

    // Question 3
    optionSet.push(new Option("Number", false));
    optionSet.push(new Option("String", false));
    optionSet.push(new Option("Boolean", false));
    optionSet.push(new Option("Confirm", true));
    question = new Question("Which of the following is not a primative data type in JavaScript?", optionSet);

    optionSet = [];
    
    // Question 4
    optionSet.push(new Option("For...in loops", false));
    optionSet.push(new Option("Enumerate", false));
    optionSet.push(new Option("For loops", true));
    optionSet.push(new Option("While loops", false));
    
    question = new Question("Fill in the blank: In JavaScript, use _______ to iterate over the items in an array.")
}

// Add Event Listeners
startBtn.addEventListener("click", startQuiz);




