const selectPlayerBtn = document.querySelector(".selectPlayer_btn");
const playerOption = document.querySelector(".player_options");
const twoPlayerBtn = document.querySelector(".twoPlayer_btn");
const AIplayerBtn = document.querySelector(".AIplayer_btn");
const boardSelection = document.querySelector(".board_selection");
const playerForm = document.querySelector(".player_form");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".player_form input");
const playBtn = document.querySelector(".play_btn");
const squares = document.querySelectorAll(".square");
const restartBtn = document.querySelector(".restart_btn");

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
  label1.textContent =`PLAYER1: ${inputs[0].value}`;
  label2.textContent =`PLAYER2: ${inputs[1].value}`;
  label1.classList.add("label-right");
  label2.classList.add("label-left");

  results.appendChild(label1);
  results.appendChild(label2);
  document.body.appendChild(results);
}


playBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let player1 = document.querySelector("#player-1").value;
  let player2 = document.querySelector("#player-2").value;
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