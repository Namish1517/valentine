const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let isMoving = false;
const bgMusic = document.getElementById("bgMusic");

// Browsers require user interaction before playing audio
document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});


const moveNoButton = () => {
  if (isMoving) return;
  isMoving = true;

  const container = noBtn.parentElement;
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const minDistanceX = btnRect.width;
  const minDistanceY = btnRect.height;

  let newX, newY, distance;

  const currentX = noBtn.offsetLeft;
  const currentY = noBtn.offsetTop;

  do {
    newX = Math.random() * (containerRect.width - btnRect.width);
    newY = Math.random() * (containerRect.height - btnRect.height);

    const dx = newX - currentX;
    const dy = newY - currentY;
    distance = Math.sqrt(dx * dx + dy * dy);
  } while (distance < Math.max(minDistanceX, minDistanceY));

  // disappear
  noBtn.style.opacity = "0";

  setTimeout(() => {
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.transform = "translate(0, 0)";
    noBtn.style.opacity = "1";
    isMoving = false;
  }, 120);
};

// Hover trigger
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);


// move on hover
noBtn.addEventListener("mouseenter", moveNoButton);

const yayyDiv = document.getElementById("yayy");
const yaySound = document.getElementById("yaySound");

const videoBg = document.getElementById("videoBg");
const bgVideo = document.getElementById("bgVideo");

yesBtn.addEventListener("click", () => {
  // UI updates
  message.classList.remove("hidden");
  yesBtn.textContent = "💘 YAY 💘";
  noBtn.classList.add("hidden");

  // Stop background music
  bgMusic.pause();
  bgMusic.currentTime = 0;

  // Play yay sound once
  yaySound.currentTime = 0;
  yaySound.play();

  // Show video as background
  videoBg.classList.remove("hidden");
  bgVideo.currentTime = 0;
  bgVideo.play();

  // Hide video after it finishes (plays once)
  bgVideo.onended = () => {
    videoBg.classList.add("hidden");
  };
});


const img = document.getElementById("bouncingImage");

let x = Math.random() * (window.innerWidth - 80);
let y = Math.random() * (window.innerHeight - 80);
let dx = 2.5;
let dy = 2;

function bounceImage() {
  x += dx;
  y += dy;

  if (x <= 0 || x + 80 >= window.innerWidth) dx *= -1;
  if (y <= 0 || y + 80 >= window.innerHeight) dy *= -1;

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  requestAnimationFrame(bounceImage);
}

bounceImage();
const emojiContainer = document.querySelector(".absolute.inset-0");

const emojis = ["💖", "💘", "💕", "💞", "🌸", "✨", "💐"];
const animations = ["animate-bounce", "animate-pulse"];

for (let i = 0; i < 12; i++) {
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.className = `
    absolute
    text-${Math.floor(Math.random() * 3) + 2}xl
    ${animations[Math.floor(Math.random() * animations.length)]}
    pointer-events-none
  `;

  emoji.style.top = `${Math.random() * 90}%`;
  emoji.style.left = `${Math.random() * 90}%`;

  emojiContainer.appendChild(emoji);
}
