const selectPlayerBtn = document.querySelector(".selectPlayer_btn");
const playerOption = document.querySelector(".player_options");
const twoPlayerBtn = document.querySelector(".twoPlayer_btn");
const AIplayerBtn = document.querySelector(".AIplayer_btn");
const gameBoard = document.querySelector(".game_board");
const restartBtn = document.querySelector(".restart_btn");

function hideElements() {
    gameBoard.style.display = "none";
    playerOption.style.display = "none";
    restartBtn.style.display = "none";
}
hideElements();

selectPlayerBtn.addEventListener("click", function() {
  if ( playerOption.style.display === "none") {
    playerOption.style.display = "block";
  } else {
    playerOption.style.display = "none";
  };
})