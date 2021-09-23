var readlineSync =require('readline-sync');

console.log("*************Do You Know Me , Really?*************")

var goodName = readlineSync.question("What's Your Name? ")
console.log("Welcome " +goodName +"!, Do you know Harsh?");
console.log("Lets Start the Game!!!");
console.log("----------------------")

var score=0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Congratulations! Thats the right answer"); 
    score++;
  }
  else{
    console.log("Ohhh! Thats the wrong answer");
  }
  console.log("Current Score: "+score);
   console.log("----------------------")
}

var questions = [

  question1 = {
    question: "Where Do I Live? :- ",
    answer: "Ranchi"
  },
  question2 = {
    question: "Which is my favourite Superhero? :- ",
    answer: "Ironman"
  },
  question3 = {
    question: "Who is my fav Cricketer? :- ",
    answer: "Dhoni"
  },
  question4 = {
    question: "Which is my favourite food? :- ",
    answer: "Pizza"
  },
  question5 = {
    question: "What kind of music do i like? :- ",
    answer: "EDM"
  },
]

for(var i=0;i<questions.length;i++){
  
  play(questions[i].question,questions[i].answer)
}

console.log("Yor Final Score Of The Quiz is "+score);
console.log("Thanks For Playing "+goodName +"!")