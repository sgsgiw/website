document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startExperience);
  document.getElementById("random-number-btn").addEventListener("click", showRandomNumber);
  document.getElementById("reverse-message-btn").addEventListener("click", reverseBirthdayMessage);
  document.getElementById("emoji-art-btn").addEventListener("click", generateEmojiArt);
  document.getElementById("useless-fact-btn").addEventListener("click", showUselessFact);
  document.getElementById("riddle-btn").addEventListener("click", showRiddle);
});

function delayOutput(text, delay = 1500) {
  setTimeout(() => {
    document.getElementById("output").textContent = text;
  }, delay);
}

function startExperience() {
  delayOutput("Preparing your interactive birthday experience...\n...Wait for it...\n");
}

function showRandomNumber() {
  const numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));
  const randomNumber = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  delayOutput(`Your random, meaningless number is: ${Math.floor(randomNumber)}`);
}

function reverseBirthdayMessage() {
  const message = "Happy Birthday";
  const reversedMessage = message.split("").reverse().join("");
  const choice = prompt("Do you want to see your birthday message in reverse? (yes/no): ");
  if (choice.toLowerCase() === "yes") {
    delayOutput(reversedMessage);
  } else {
    delayOutput(message);
  }
}

function generateEmojiArt() {
  const emojis = ["🎉", "🎈", "🎂", "💫", "✨"];
  let art = "";
  for (let i = 0; i < 5; i++) {
    art += emojis.sort(() => Math.random() - 0.5).join("").repeat(2) + "\n";
  }
  delayOutput("Here’s your random emoji art:\n" + art);
}

function showUselessFact() {
  const facts = [
    "Did you know? This code is totally pointless!",
    "Fun Fact: This code is wasting your time!",
    "Interesting Fact: There’s no reason to run this!",
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  delayOutput(randomFact);
}

function showRiddle() {
  delayOutput("What's round, has no point, and yet here you are?\n...Wait for it...\nThe answer is... this code!");
}
