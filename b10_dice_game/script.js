// Elements
const btnNewGameEl = document.querySelector(".js-new-game-btn");
const dice1El = document.querySelector("#dice-1 .spinner");
const dice2El = document.querySelector("#dice-2 .spinner");
const inputFinalScoreEl = document.querySelector(".js-final-score");
const btnRollDiceEl = document.querySelector(".js-roll-dice");
const btnHoldScoreEl = document.querySelector(".js-hold-score");
const playerEl = {
  player1: document.querySelector(".js-player-1"),
  player2: document.querySelector(".js-player-2"),
};

// Data
const name = {
  player1: "Player 1",
  player2: "Player 2",
};
const currentScore = {
  player1: 0,
  player2: 0,
};
const totalScore = {
  player1: 0,
  player2: 0,
};

let finalScore = 0;
let currentPlayer = "player1"; // Nhận diện ai là người chơi hiện tại. Tổng có 2 người chơi

function randomDice() {
  const x = Math.random(); // 0 <= x < 1
  const y = x * 6; // 0 <= y < 6
  const z = Math.floor(y) + 1; // 1 <= z <= 6
  return z;
}

function handleNewGame() {
  resetData();

  // Game chưa bắt đầu
  if (finalScore <= 0) {
    alert("Vui lòng nhập vào giá trị Final Score hợp lệ!");
    return;
  }

  // Bắt đầu tiến hành những logic để NewGame
  inputFinalScoreEl.disabled = true;

  btnRollDiceEl.classList.remove("disable");
  btnHoldScoreEl.classList.remove("disable");

  playerEl[currentPlayer].classList.add("active");
}

function switchPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
  } else if (currentPlayer === "player2") {
    currentPlayer = "player1";
  }

  // Đưa giá trị điểm currentScore về 0 lại từ đầu
  currentScore.player1 = 0;
  currentScore.player2 = 0;

  renderSwitchPlayerUI();
  renderCurrentScoreUI();
}

function handleRollDice() {
  // Sinh số ngâu nhiên cho 2 cục xúc sắc
  const dice1Number = randomDice();
  const dice2Number = randomDice();

  // Hiển thị xúc sắc mới random ra giao diện
  renderDiceUI(dice1Number, dice2Number);

  // Kiểm tra xem có số nào là 1 và 6 hay không???
  if (
    dice1Number === 1 ||
    dice1Number === 6 ||
    dice2Number === 1 ||
    dice2Number === 6
  ) {
    // Chuyển lượt chơi
    switchPlayer();
    return;
  }

  currentScore[currentPlayer] =
    currentScore[currentPlayer] + dice1Number + dice2Number;
  renderCurrentScoreUI();
}

function handleCheckWinner() {
  let isWinner = false;
  if (totalScore.player1 >= finalScore) {
    playerEl.player1.classList.add("winner");
    playerEl.player1.classList.remove("active");
    playerEl.player1.querySelector(".js-player-name").innerHTML = "WINNER";
    isWinner = true;
  }
  if (totalScore.player2 >= finalScore) {
    playerEl.player2.classList.add("winner");
    playerEl.player2.classList.remove("active");
    playerEl.player2.querySelector(".js-player-name").innerHTML = "WINNER";
    isWinner = true;
  }
  if (isWinner === true) {
    btnRollDiceEl.classList.add("disable");
    btnHoldScoreEl.classList.add("disable");
  }
  return isWinner;
}

function handleHoldScore() {
  totalScore[currentPlayer] =
    currentScore[currentPlayer] + totalScore[currentPlayer];

  renderTotalScoreUI();

  // Kiểm tra xem có ai là người thắng hay không? Nếu có thì return về true, Nếu không thì return về false
  const isWinner = handleCheckWinner();

  // Không có người chơi nào thắng <-> Không có ai đạt được số kiểm FinalScore
  if (isWinner === false) {
    // Chuyển đổi lượt chơi
    switchPlayer();
  }
}

function handleChangeFinalScore() {
  finalScore = Number(inputFinalScoreEl.value);
}

function resetData() {
  dice1El.classList.remove(
    "dice-1",
    "dice-2",
    "dice-3",
    "dice-4",
    "dice-5",
    "dice-6"
  );
  dice1El.classList.add("dice-1");

  dice2El.classList.remove(
    "dice-1",
    "dice-2",
    "dice-3",
    "dice-4",
    "dice-5",
    "dice-6"
  );
  dice2El.classList.add("dice-1");

  playerEl.player1.querySelector(".js-current-score").innerHTML = "0";
  playerEl.player2.querySelector(".js-current-score").innerHTML = "0";

  playerEl.player1.classList.remove("winner");
  playerEl.player1.classList.remove("active");
  playerEl.player2.classList.remove("winner");
  playerEl.player2.classList.remove("active");

  playerEl.player1.querySelector(".js-player-name").innerHTML = name.player1;
  playerEl.player2.querySelector(".js-player-name").innerHTML = name.player2;

  playerEl.player1.querySelector(".js-total-score").innerHTML = 0;
  playerEl.player2.querySelector(".js-total-score").innerHTML = 0;

  btnRollDiceEl.classList.add("disable");
  btnHoldScoreEl.classList.add("disable");

  currentPlayer = "player1";
  currentScore.player1 = 0;
  currentScore.player2 = 0;
  totalScore.player1 = 0;
  totalScore.player2 = 0;
}

// Render UI
function renderSwitchPlayerUI() {
  playerEl[currentPlayer].classList.add("active");
  playerEl[
    currentPlayer === "player1" ? "player2" : "player1"
  ].classList.remove("active");
}
function renderDiceUI(dice1Number, dice2Number) {
  dice1El.classList.remove(
    "dice-1",
    "dice-2",
    "dice-3",
    "dice-4",
    "dice-5",
    "dice-6"
  );
  dice2El.classList.remove(
    "dice-1",
    "dice-2",
    "dice-3",
    "dice-4",
    "dice-5",
    "dice-6"
  );

  dice1El.classList.add("dice-" + dice1Number);
  dice2El.classList.add("dice-" + dice2Number);
}
function renderTotalScoreUI() {
  playerEl.player1.querySelector(".js-total-score").innerHTML =
    totalScore.player1;
  playerEl.player2.querySelector(".js-total-score").innerHTML =
    totalScore.player2;
}
function renderCurrentScoreUI() {
  playerEl.player1.querySelector(".js-current-score").innerHTML =
    currentScore.player1;
  playerEl.player2.querySelector(".js-current-score").innerHTML =
    currentScore.player2;
}

// Binding event
btnNewGameEl.addEventListener("click", handleNewGame);
btnRollDiceEl.addEventListener("click", handleRollDice);
btnHoldScoreEl.addEventListener("click", handleHoldScore);
inputFinalScoreEl.addEventListener("input", handleChangeFinalScore);

// Init Game
resetData();
