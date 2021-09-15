const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const resetButton = document.querySelector('#resetButton');
const P1Score = document.querySelector('#P1Score');
const P2Score = document.querySelector('#P2Score');
const select = document.querySelector('#select');
let P1Points = 0;
let P2Points = 0;
let winningScore = 3;
let isGameOver = false;


button1.addEventListener('click', (e) => {
    if (!isGameOver){
        P1Points += 1;
        if (P1Points == winningScore){
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
        if (P2Points == winningScore){
            isGameOver = true;
            P2Score.classList.add("winner");
            P1Score.classList.add("loser");
        } 
        P2Score.innerText = P2Points;
        
    }

})

select.addEventListener('change', () =>{
    winningScore = parseInt(select.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset (){
    P1Score.innerText = 0;
    P2Score.innerText = 0;
    isGameOver = false;
    P1Points = 0;
    P2Points = 0;
    P1Score.classList.remove("winner", "loser");
    P2Score.classList.remove("winner", "loser");
}