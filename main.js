let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// user combinations

function convert(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    if(letter === 's') return "Scissors";
}


function win(userChoices, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoices)}(user) beats ${convert(computerChoice)}(comp) you win!`;
    
}
function lose(userChoices, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoices)}(user) loses ${convert(computerChoice)}(comp) you lost!`;
}
function draw(userChoices, computerChoice){
    result_p.innerHTML = `${convert(userChoices)} equals ${convert(computerChoice)} its draw!`;
}

function game(userChoices){
    const computerChoice = getCompChoice();
    switch(userChoices + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoices, computerChoice);
            break;
        case 'rp':        
        case 'ps':        
        case 'sr':
            lose(userChoices, computerChoice);
            break;
        case 'rr':        
        case 'pp':        
        case 'ss':
            draw(userChoices, computerChoice);
            break;
    }
    
}


// getting comp combinations
function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })
    paper_div.addEventListener('click', function(){
        game('p');
    })
    scissors_div.addEventListener('click', function(){
        game('s');
    })
}
main();








