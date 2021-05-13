const objSound = {
  "sound-c": "./sounds/A.wav",
  "sound-d": "./sounds/D.wav",
  "sound-e": "./sounds/E.wav",
  "sound-f": "./sounds/F.wav",
  "sound-g": "./sounds/G.wav",
  "sound-a": "./sounds/A.wav",
  "sound-b": "./sounds/B.wav",
};

const objKeySound = {
  1: "sound-b",
  2: "sound-a",
  3: "sound-g",
  4: "sound-f",
  5: "sound-e",
  6: "sound-d",
  7: "sound-c",
};

const audios = document.querySelectorAll(".audio");
const buttons = document.querySelectorAll(".sound");
buttons.forEach((button) => {
  var classInButton = button.getAttribute("class");
  var arrayClass = classInButton.split(" ");
  var keyObj = arrayClass.pop();
  button.addEventListener("click", () => {
    playSound(objSound[keyObj]);
  });
});

const playSound = (src) => {
  var ping = new Audio(src);
  ping.currentTime = 0;
  ping.play();
};

window.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "1":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "2":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "3":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "4":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "5":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "6":
      playSound(objSound[objKeySound[e.key]]);
      break;
    case "7":
      playSound(objSound[objKeySound[e.key]]);
      break;
    default:
      break;
  }
});
