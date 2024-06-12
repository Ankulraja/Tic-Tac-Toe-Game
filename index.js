const game_status = document.querySelector(".game_Status");
const allbox = document.querySelectorAll(".box");
const btn = document.querySelector(".replay_btn");

let current_Player;
let gameGrid;

let game = true;

const wining_position = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function initialGame() {
  current_Player = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  game_status.innerText = `Current Player Move:- ${current_Player}`;
  btn.style.opacity = 0;
}
initialGame();

function check_for_win() {
  wining_position.forEach((position) => {
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2]] !== "") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      game_status.innerText = `Player  "${gameGrid[position[0]]}" Win`;
      allbox[position[0]].style.backgroundColor = "green";
      allbox[position[1]].style.backgroundColor = "green";
      allbox[position[2]].style.backgroundColor = "green";
      game = false;
    } else if (
      gameGrid[0] !== "" &&
      gameGrid[1] !== "" &&
      gameGrid[2] !== "" &&
      gameGrid[3] !== "" &&
      gameGrid[4] !== "" &&
      gameGrid[5] !== "" &&
      gameGrid[6] !== "" &&
      gameGrid[7] !== "" &&
      gameGrid[8] !== ""
    ) {
      game_status.innerText = "Match Tie";
    }
  });
}

function new_play() {
  allbox.forEach((value) => {
    value.innerText = "";
    value.style.backgroundColor = "transparent";
  });
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  current_Player = "X";
  game_status.innerText = `Current Player Move:- ${current_Player}`;
  btn.style.opacity = 0;
  game = true;
}
function swap() {
  if (current_Player === "X") {
    current_Player = "0";
  } else {
    current_Player = "X";
  }
  game_status.innerText = `Current Player Move: ${current_Player}`;
}
function handle_the_event(index) {
  if (gameGrid[index] === "") {
    btn.style.opacity = 1;
    allbox[index].innerText = current_Player;
    gameGrid[index] = current_Player;
    swap();
    check_for_win();
  }
}

allbox.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (game === true) {
      handle_the_event(index);
    }
  });
});

btn.addEventListener("click", () => {
  new_play();
});
