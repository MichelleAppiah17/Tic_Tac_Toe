const selectPlayerBtn = document.querySelector(".selectPlayer_btn");
const playerOption = document.querySelector(".player_options");
const twoPlayerBtn = document.querySelector(".twoPlayer_btn");
const AIplayerBtn = document.querySelector(".AIplayer_btn");
const boardSelection = document.querySelector(".board_selection")
const gameBoard = document.querySelector(".game_board");
const squares = document.querySelectorAll(".square");
const restartBtn = document.querySelector(".restart_btn");

function hideElements() {
    boardSelection.style.display = "none";
    playerOption.style.display = "none";
}
hideElements();

selectPlayerBtn.addEventListener("click", function() {
  if ( playerOption.style.display === "none") {
    playerOption.style.display = "block";
  } else {
    playerOption.style.display = "none";
  };
})

twoPlayerBtn.addEventListener("click", function() {
    boardSelection.style.display = "block";
    squares.forEach(square => {
        square.style.backgroundColor = " rgb(54, 231, 208)";  
    });   
})

AIplayerBtn.addEventListener("click", function() {
    boardSelection.style.display = "block";
    squares.forEach(square => {
        square.style.backgroundColor = " rgb(156, 156, 241)";  
    });   
})