let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    let options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3); //generates a no b/w 0-1     //if we * by 3 = b/w 0-2
    return options[randIdx];                                  //if we * by 10 = b/w 0-9
    //stone,paper,scissors
}

const drawGame = () =>{
    msg.innerText = "Game was draw ! Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin == true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice = genComputerChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            //scissors,paper
             userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "stone" ? true : false; 
        }
        else{
            //paper,rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach( (choice) =>{
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});