const btnRollDice = document.querySelector(".roll-dice");

const imageDice1 = document.querySelector(".dice-1");
const imageDice2 = document.querySelector("#dice-2");

function randomInRange(start, end) {
  const number = Math.random() * (end - start + 1) + start;
  return Math.floor(number);
}

function playSound(src) {
  var ping = new Audio(src);
  ping.currentTime = 0;
  ping.play();
}

function roolDiceClick() {
  const randomedNumber1 = randomInRange(1, 6);
  const randomedNumber2 = randomInRange(1, 6);
  const srcImageDice1 = `./images/dice${randomedNumber1}@2x.png`;
  const srcImageDice2 = `./images/dice${randomedNumber2}@2x.png`;

  imageDice1.setAttribute("src", srcImageDice1);
  imageDice2.setAttribute("src", srcImageDice2);

  playSound(
    "https://alexerlandsson.github.io/assets/codepen/roll-the-dice/sound/dice-sound.mp3"
  );
}

function roolDice() {
  var started = Date.now();

  // make it loop every 200 milliseconds
  var interval = setInterval(function () {
    // for 3 seconds
    if (Date.now() - started > 3000) {
      // and then pause it
      clearInterval(interval);
    } else {
      // the thing to do every 200ms
      roolDiceClick();
    }
  }, 200); // every 200 milliseconds
}

btnRollDice.addEventListener("click", roolDice);
