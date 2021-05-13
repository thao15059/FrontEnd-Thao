const btnAsk = document.querySelector(".btn-ask");
const imageBall = document.querySelector(".ball img");
const body = document.querySelector("body");

function randomInRange(start, end) {
  const number = Math.random() * (end - start + 1) + start;
  return Math.floor(number);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function btnAskClick() {
  const randomedNumber = randomInRange(1, 5);
  const nameImage = `./images/ball${randomedNumber}@2x.png`;
  imageBall.setAttribute("src", nameImage);
  console.log(body);
  body.style.backgroundColor = getRandomColor();
}

function roolImage() {
  var started = Date.now();

  // make it loop every 200 milliseconds
  var interval = setInterval(function () {
    // for 3 seconds
    if (Date.now() - started > 3000) {
      // and then pause it
      clearInterval(interval);
    } else {
      // the thing to do every 200ms
      btnAskClick();
    }
  }, 200); // every 200 milliseconds
}

btnAsk.addEventListener("click", roolImage);
