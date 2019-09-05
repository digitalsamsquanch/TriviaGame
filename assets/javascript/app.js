
// - create object with all the questions
    // - each question will have an index, the actual question itself, possible answers, and the correct answer.
var questions = [
    {
        text: "What color are aircraft black boxes?",
        answers: ["Black", "Orange", "Red", "Blue"],
        correctAnswer: "Orange",
        used: false
    },
    {
        text: "What is the main ingredient of Bombay Duck?",
        answers: ["Duck", "Goose", "Fish", "Chicken"],
        correctAnswer: "Fish",
        used: false
    },
    {
        text: "How long (in miles) is Ninety Mile Beach in New Zealand?",
        answers: ["55", "90", "88", "104"],
        correctAnswer: "55",
        used: false
    },
    {
        text: "How many years did the 100 years war last?",
        answers: ["116", "100", "95", "80"],
        correctAnswer: "116",
        used: false
    },
    {
        test: "What kind of animal is the horned toad?",
        answers: ["Lizard", "Toad", "Frog", "Snake"],
        correctAnswer: "Lizard",
        used: false
    },
    {
        text: "From which country do French Fries originate?",
        answers: ["Belgium", "USA", "France", "England"],
        correctAnswer: "Belgium",
        used: false
    },
    {
        text: "What kind of animal is the firefly?",
        answers: ["Winged Beetle", "Flying Any", "Fly", "Wasp"],
        correctAnswer: "Winged Beetle",
        used: false
    },
    {
        text: "Which country invented the Caesar salad?",
        answers: ["Mexico", "Italy", "Greece", "Spain"],
        correctAnswer: "Mexico",
        used: false
    },
    {
        text: "What kind of animal is the prairie dog?",
        answers: ["Rodent", "Canine", "Feline", "Hare"],
        correctAnswer: "Rodent",
        used: false
    },
    {
        text: "In which state was Tennessee Williams born?",
        answers: ["Mississippi", "Tennessee", "Kentucky", "Ohio"],
        correctAnswer: "Mississippi",
        used: false
    }
];

/*- create startGame function that will fill in the html template with the question and the possible answers (potentially randomized order to prevent cheating)
    - make a timer start as soon as the game starts
- player must either select an answer and submit to move on to the next question or have the time run out and move on to the next question
- the correct/incorrect message will render for 5 seconds and the correct answer will render regardless
    
*/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function startGame() {
    i = 0
    shuffle(questions[i].answers);
        
    $(".question").html("<h2>", { text: questions[i].text});
    arr = shuffle(arr);
    $.each(questions[i].answers, function(i, ans){
        console.log(ans)
        $(".answers").append("<input value='" + ans + "'>", { type: "radio" })
    })
}

shuffle(questions);
startGame();
/* To Do:
- get value of radio checked
- $("input[name='gender']:checked")
*/