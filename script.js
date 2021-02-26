//sorry this code might be messy looooooooooooooooooooooooooooooooooooooool
//connect with the html elements 
let questionSpace = document.getElementById('question');
let count = document.getElementById('countdown');
let answer = document.getElementById('input');
let score = document.getElementById('score');
let highScore = document.getElementById('bestScore');
highScore.innerHTML = localStorage.getItem('bestScore');

let scoreNumber = 0;

//this function generates random questions and calls answerCheck();
function question() {
  let num1;
  let num2;
  let sign = Math.round(Math.random()*3);
  if(scoreNumber <= 10) {  
  num1 = Math.round(Math.random()*5) 
  num2 = Math.round(Math.random()*5); 



 if(sign == 0) { 
    questionSpace.innerHTML = num1 + " + " + num2;
    answerCheck(0,num1,num2);
  } else if(sign == 1) { 
    questionSpace.innerHTML = num1 + " - " + num2;
    answerCheck(1,num1,num2);
  }  else if(sign = 2) { 
     questionSpace.innerHTML = num1 + " * " + num2;
     answerCheck(2,num1,num2);
  } 

   }  else { 
     console.log("f");
      num1 =   Math.round(Math.random()*99999999999999);
      num2 = Math.round(Math.random()*999999999999999);  
      
 if(sign == 0) { 
  questionSpace.innerHTML = num1 + " + " + num2;
  answerCheck(0,num1,num2);
} else if(sign == 1) { 
  questionSpace.innerHTML = num1 + " - " + num2;
  answerCheck(1,num1,num2);
}  else if(sign = 2) { 
   questionSpace.innerHTML = num1 + " * " + num2;
   answerCheck(2,num1,num2);
}   
   }
}
question();
function answerCheck(type,num1,num2) { 
    var num = 5;
    let interval = setInterval(function() {  
      num--;
      countdown.innerHTML = num;
      if(num <= 0) { 

 if(type == 0) { 

     if(answer.value == num1 + num2) { 
       console.log('correct0');
         scoreNumber++;
       score.innerHTML = scoreNumber;
       clearInterval(interval);
     } else { 
         getHighScore();
         document.write('your score is: ' + scoreNumber + " , get better at maths fool!");
         clearInterval(interval);
     }

  } else if(type == 1) { 

   if(answer.value == num1 - num2) { 
    console.log("correct1");
    scoreNumber++; 
    score.innerHTML = scoreNumber;
    clearInterval(interval);
   } else { 
       getHighScore();
       document.write("your score is: " + scoreNumber + ", get better at maths fool!");
       clearInterval(interval);
   }

  } else if(type == 2) { 
   if(num1 * num2 == answer.value) { 
      console.log("correct3");
      scoreNumber++;
      score.innerHTML = scoreNumber;
      clearInterval(interval);
   } else { 
       getHighScore();
       document.write("your score is: " + scoreNumber + " , get better at maths fool!");
       clearInterval(interval);
   }
  }
question();
}
   },1000);
}

function getHighScore() { 
    if(parseInt(localStorage.getItem('bestScore')) < scoreNumber) { 
        localStorage.setItem('bestScore',scoreNumber);
    }
}

if(localStorage.getItem('injected') == 'false') { 
  localStorage.setItem('bestScore',0);
  localStorage.setItem('injected',true);
  }



  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);
  console.log(2+2);






































































































































































































































































































































































































































  //lel :p