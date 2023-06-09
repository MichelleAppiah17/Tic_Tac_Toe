const selectPlayerBtn = document.querySelector(".selectPlayer_btn");
const playerOption = document.querySelector(".player_options");
const twoPlayerBtn = document.querySelector(".twoPlayer_btn");
const AIplayerBtn = document.querySelector(".AIplayer_btn");
const boardSelection = document.querySelector(".board_selection");
const playerForm = document.querySelector(".player_form");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".player_form input");
const playBtn = document.querySelector(".play_btn");
let playerX = document.querySelector("#player-X");
let playerO = document.querySelector("#player-O");
let message = document.querySelector("#message");
const squares = document.querySelectorAll(".square");
const resetBtn = document.querySelector(".reset_btn");

function hideElements() {
    boardSelection.style.display = "none";
    playerOption.style.display = "none";
    playerForm.style.display = "none";
}
hideElements();

const results = document.createElement("div");
results.classList.add("results");

selectPlayerBtn.addEventListener("click", function() {
  if ( playerOption.style.display === "none") {
    playerOption.style.display = "block";
  } else {
    playerOption.style.display = "none";
  }; 
})

twoPlayerBtn.addEventListener("click", function() {
  if ( playerForm.style.display === "none") {
    playerForm.style.display = "block";
  } else {
    playerForm.style.display = "none";
  }
  boardSelection.style.display = "block"; 
})

function formSubmission() {
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  label1.textContent =`Player-X: ${inputs[0].value}`;
  label2.textContent =`Player-O: ${inputs[1].value}`;
  label1.classList.add("label-right");
  label2.classList.add("label-left");

  results.appendChild(label1);
  results.appendChild(label2);
  document.body.appendChild(results);
}


playBtn.addEventListener("click", function(event) {
  event.preventDefault();
   playerX.value;
   playerO.value;
   boardSelection.style.display = "block"; 
   squares.forEach(square => {
    square.style.backgroundColor = "rgb(54, 231, 208)";  
  });
  formSubmission();
  playerForm.style.display = "none";
  form.reset();
})

AIplayerBtn.addEventListener("click", function() {
    boardSelection.style.display = "block";
    squares.forEach(square => {
        square.style.backgroundColor = "rgb(156, 156, 241)";  
    });   
})

function isBoardFull(){
 for(let i = 0; i < squares.length; i ++){
  if(squares[i].textContent == ""){
    return false;
  }
 }
 return true;
};

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent && 
      squares[a].textContent === squares[b].textContent &&
       squares[a].textContent === squares[c].textContent
       ) {

      const winner = squares[a].textContent;
      message.textContent = `Congratulations, ${winner} wins!`;
      return squares[a].textContent;
    }
  }

  if (isBoardFull()) {
    message.textContent = "It's a tie!";
    return 'tie';
  }
  return null;
};


let currentPlayer = 'X';
let currentPlayerDisplay = document.querySelector("#current_Player");


function handleSquares(square) {
  if (!square.disabled) {
    if (currentPlayer === 'X') {
      square.textContent = 'X';
      currentPlayer = 'O';
      currentPlayerDisplay.textContent = "Player O's turn";
    } else {
      square.textContent = 'O';
      currentPlayer = 'X';
      currentPlayerDisplay.textContent = "Player X's turn";
    }
    square.disabled = true;

    const winner = checkWinner();
    if (winner !== null) {
      currentPlayerDisplay.textContent = "";
    }else if (isBoardFull()) {
      message.textContent = "It's a tie!";
      currentPlayerDisplay = "";
    }else{
      currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}
squares.forEach(square => {
  square.addEventListener('click', function () {
    handleSquares(square);
  });
});    

function ResetGame() {
  squares.forEach(square => {
    square.textContent = "";
    square.disabled = false;
  });
  message.textContent = "";
  currentPlayer = "X";
  currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
}
 
resetBtn.addEventListener("click", function(){
  ResetGame();
});