let game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// console.log(game[0][0]);

let player = "O";

function play(x, y) {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }

  game[x][y] = player;
  // console.log(game); // checking
  document.getElementById(`${x}${y}`).innerText = player;

  if (game[0][0] == player && game[0][1] == player && game[0][2] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[1][0] == player && game[1][1] == player && game[1][2] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[2][0] == player && game[2][1] == player && game[2][2] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[0][0] == player && game[1][0] == player && game[2][0] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[0][1] == player && game[1][1] == player && game[2][1] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[0][2] == player && game[1][2] == player && game[2][2] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[0][0] == player && game[1][1] == player && game[2][2] == player) {
    alert(`Congrats ${player}`);
  }
  if (game[0][2] == player && game[1][1] == player && game[2][0] == player) {
    alert(`Congrats ${player}`);
  }
}

// 00 01 02
// 10 11 12
// 20 21 22
