const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "someone is waiting for you out there.",
  "you might be the reason someone smiled today.",
  "your journey always always begins with a single step.",
  "people love you more than you know by the way",
  "one day your life will be a story you tell to your grandchidren.",
  "your curiosity is a superpower."
  ,
];

const fortunes = [
    "you will have a pleasant surprise",
    "You will meet someone special soon.",
    "A dream you have will soon come true.",
    "You will find money on the ground unexpectedly!"
];
const fortuneBtn = document.getElementById("fortuneBtn");
const displayMessage = document.getElementById("displayMessage");
fortuneBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
     displayMessage.textContent = randomFortune;
});

fortuneBtn.addEventListener("click", () => {
    const pick = Math.floor(Math.random() * fortunes.length);
    displayMessage.textContent = fortunes[pick];
});

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
   
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});

