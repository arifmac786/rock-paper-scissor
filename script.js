let boxes = document.querySelectorAll(".box");
let content = document.querySelector(".result h2");
let user = document.querySelector(".user-score .num");
let comp = document.querySelector(".computer-score .num");
let resultBox = document.querySelector(".result h2")

let scores = JSON.parse(localStorage.getItem("score")) ?? {
   userScore : 0,
   compScore : 0
}

user.innerHTML = scores.userScore;
comp.innerHTML = scores.compScore;

   



let computerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissor"];
  return choices[randomNum];
};

let matchDecider = (userChoice, compChoice) => {
  if (compChoice === userChoice){ 
     resultBox.style.backgroundColor = "pink" 
    resultBox.style.color = "blue" 
    return "tie";}

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    resultBox.style.backgroundColor = "green" 
    resultBox.style.color = "white" 

    return "win";
  } else {
     resultBox.style.backgroundColor = "red" 
    resultBox.style.color = "white" 
    return "loss";
  }
};

let updateScore = (displayresult) => {
  if (displayresult === "win") {
    scores.userScore++;
    user.innerHTML = scores.userScore;
  } else if (displayresult === "loss") {
    scores.compScore++;
    comp.innerHTML = scores.compScore;
  }
  localStorage.setItem("score",JSON.stringify(scores))
  
};

boxes.forEach((elem) => {
  elem.addEventListener("click", () => {




    
    let compChoice = computerChoice();
    let userChoice = elem.getAttribute("id");
    //  console.log(matchDecider(compChoice,userChoice))
    let displayresult = matchDecider(userChoice, compChoice);
    content.innerHTML = `you chose ${userChoice} , computer chose ${compChoice},  ${displayresult}`;
    updateScore(displayresult);
  });
});


document.querySelector(".reset").addEventListener("click",()=>{
  scores.userScore = 0;
  scores.compScore = 0;
  user.innerHTML = 0;
  comp.innerHTML = 0
localStorage.setItem("userScores", JSON.stringify(scores));
})



