var readlineSync = require("readline-sync");
var userName = readlineSync.question("Whats ur name? ");
console.log("welcome! " + userName)
console.log("There is  a quiz on friends.There are 5 questions u can answer them ,to  recollect FRIENDS memories.Enter the options like a,b and c ")
var score =0;

var highestscore = 5;
function play(question,answer){
  var game=readlineSync.question(question);
  

  if(game.toUpperCase() == answer.toUpperCase()){
    console.log("u are right");
score++;
  }else{
    console.log("u are wrong");
    score = score + 0;
  }
 
  
 console.log("current score : "+ score)
 console.log("---")
}
var questions =[{
  question :"Chandler married to: a.monica ,b.phoebe, c.someone else ",
  answer:"a"
},
{
  question :"What was the  name of monkey of ross: a.marcel , b.moss ,c.something else ",
  answer:"a"
},{
  question :"How many sisters did  joey had: a.5 ,b.6 , c.7 ",
  answer:"c"
},
{
  question :"What was the name of chandlers's 4th std friend: a.sussie moss , b.beary gill, c.something else ",
  answer:"A"
},
{
  question :"Ross had a crush on : a.rachel , b.phoebe ,c.something else",
  answer:"a"
}
];
for(var i =0;i <questions.length;i++){
  var current = questions[i];
  play(current.question,current.answer);
}
 console.log("YAY! You SCORED: " + score);
console.log("Check out the high scores, if you should be there ping me and I'll update it ");
console.log("Akshay : 5")
console.log("Chandan : 4")
  
