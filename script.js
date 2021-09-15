const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const resetButton = document.querySelector('#resetButton');
const P1Score = document.querySelector('#P1Score');
const P2Score = document.querySelector('#P2Score');
let P1Points = 0;
let P2Points = 0;
let winningScore = 5;
let isGameOver = false;


button1.addEventListener('click', (e) => {
    if (!isGameOver){
        P1Points += 1;
        if (P1Points === winningScore){
            isGameOver = true;
            P1Score.classList.add("winner");
            P2Score.classList.add("loser"); 
        }
        P1Score.innerText = P1Points;
        
    }

})

button2.addEventListener('click', (e) => {
    if (!isGameOver){
        P2Points += 1;
        if (P2Points === winningScore){
            isGameOver = true;
            P2Score.classList.add("winner");
            P1Score.classList.add("loser");
        } 
        P2Score.innerText = P2Points;
        
    }

})

resetButton.addEventListener('click', (e) => {
    P1Score.innerText = 0;
    P2Score.innerText = 0;
    isGameOver = false;
    P1Points = 0;
    P2Points = 0;
    P1Score.classList.remove("winner")
    P1Score.classList.remove("loser")
    P2Score.classList.remove("winner")
    P2Score.classList.remove("loser")
})