"use strict"; // Enable strict mode for better error checking ECMAScript 5 feature
// Define moods
const moods = [
  { text: "Happy", emoji: "😊", color: "green" },
  { text: "Sad", emoji: "😢", color: "blue" },
  { text: "Angry", emoji: "😠", color: "red" },
  { text: "Calm", emoji: "😌", color: "lightblue" }, // auto
  { text: "Focused", emoji: "🧠", color: "lightblue" },
  { text: "Chill", emoji: "😎", color: "lightgreen" },
];

const changeBtn = document.getElementById("change-btn");
const autoBtn = document.getElementById("auto-btn");
const moodStatus = document.querySelector("#mood-text strong");
const body = document.body;
const autoMood = 3;

autoBtn.addEventListener("click", () => {
  moodStatus.innerText = generateText(autoMood);
  changeBodyBackgroundColor(autoMood);
});

changeBtn.addEventListener("click", () => {
  // Generate random number
  let arrayIndex = Math.floor(Math.random() * moods.length);
  moodStatus.innerText = generateText(arrayIndex);
  changeBodyBackgroundColor(arrayIndex);
});

function generateText(arrayIndex) {
  return moods[arrayIndex]["text"] + " " + moods[arrayIndex]["emoji"];
}

function changeBodyBackgroundColor(arrayIndex) {
  body.style.backgroundColor = moods[arrayIndex]["color"];
}
