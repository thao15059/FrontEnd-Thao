const finalScore = document.querySelector(".final-score");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

const totalScorePlayerOne = document.querySelectorAll(
  ".player-current-score"
)[0];
const totalScorePlayerTwo = document.querySelectorAll(
  ".player-current-score"
)[1];

let currentScorePlayerOne = document.querySelectorAll(".player-score")[0];
let currentScorePlayerTwo = document.querySelectorAll(".player-score")[1];

const playerPanelOne = document.querySelectorAll(".player-panel")[0];
const playerPanelTwo = document.querySelectorAll(".player-panel")[1];
const diceOne = document.querySelector("#dice-1 > div");
const diceTwo = document.querySelector("#dice-2 > div");
let currentPlayerPlay = false;
let isFinished = false;
let isGameStart = false;

function randomInRange(start, end) {
  const number = Math.random() * (end - start + 1) + start;
  return Math.floor(number);
}

function whoWin() {
  if (Number(totalScorePlayerOne.innerHTML) >= finalScore.value) {
    alert("Player 1 is Winner");
    playerPanelOne.classList.add("winner");
    isFinished = true;
    return;
  }
  if (Number(totalScorePlayerTwo.innerText) >= finalScore.value) {
    alert("Player 2 Winner");
    playerPanelTwo.classList.add("winner");
    isFinished = true;
    return;
  }
}

function isGameReadyOrOver() {
  if (!isGameStart) {
    alert("Please Start New Game");
    return;
  }

  if (isFinished) {
    alert("Game is finished. Start New Game");
    return;
  }
}

btnNew.addEventListener("click", () => {
  console.log("Final Score: ", finalScore.value);
  playerPanelOne.classList.add("active");
  isGameStart = true;
});

btnRoll.addEventListener("click", () => {
  isGameReadyOrOver();

  if (!currentPlayerPlay) {
    whoWin();
    const diceOneNewValue = randomInRange(1, 6);
    const diceTwoNewValue = randomInRange(1, 6);

    diceOne.className = `spinner dice-${diceOneNewValue}`;
    diceTwo.className = `spinner dice-${diceTwoNewValue}`;
    if (diceOneNewValue === 1 || diceTwoNewValue === 1) {
      alert("Change turn!");
      currentScorePlayerOne.innerHTML = 0;
      currentPlayerPlay = true;
      playerPanelOne.classList.remove("active");
      playerPanelTwo.classList.add("active");
      return;
    }
    currentScorePlayerOne.innerHTML =
      Number(currentScorePlayerOne.innerText) +
      diceOneNewValue +
      diceTwoNewValue;
  } else {
    whoWin();
    const diceOneNewValue = randomInRange(1, 6);
    const diceTwoNewValue = randomInRange(1, 6);

    diceOne.className = `spinner dice-${diceOneNewValue}`;
    diceTwo.className = `spinner dice-${diceTwoNewValue}`;
    if (diceOneNewValue === 1 || diceTwoNewValue === 1) {
      alert("Change turn!");
      currentScorePlayerTwo.innerHTML = 0;
      currentPlayerPlay = false;
      playerPanelTwo.classList.remove("active");
      playerPanelOne.classList.add("active");
      return;
    }
    currentScorePlayerTwo.innerHTML =
      Number(currentScorePlayerTwo.innerText) +
      diceOneNewValue +
      diceTwoNewValue;
  }
});

btnHold.addEventListener("click", () => {
  isGameReadyOrOver();

  if (!currentPlayerPlay) {
    totalScorePlayerOne.innerText =
      Number(totalScorePlayerOne.innerText) +
      Number(currentScorePlayerOne.innerText);

    playerPanelOne.classList.remove("active");
    playerPanelTwo.classList.add("active");
    currentScorePlayerOne.innerHTML = 0;
    currentPlayerPlay = true;
  } else {
    totalScorePlayerTwo.innerText =
      Number(totalScorePlayerTwo.innerText) +
      Number(currentScorePlayerTwo.innerText);

    playerPanelTwo.classList.remove("active");
    playerPanelOne.classList.add("active");
    currentScorePlayerTwo.innerHTML = 0;
    currentPlayerPlay = false;
  }

  whoWin();
});
