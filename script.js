// =========================
// 🎵 Musik Control
// =========================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔇";
  } else {
    music.play();
    musicBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// =========================
// 🎬 Welcome Screen Control
// =========================
const welcome = document.getElementById("welcome");
const openBtn = document.getElementById("openBtn");
const page = document.getElementById("page");
const clouds = document.getElementById("clouds");

openBtn.addEventListener("click", () => {
  welcome.style.display = "none";
  clouds.style.display = "block";
  setTimeout(() => {
    clouds.style.display = "none";
    page.style.display = "block";
    music.play();
    isPlaying = true;
    musicBtn.textContent = "🔊";
  }, 1500);
});

// =========================
// 🎨 Theme Toggle
// =========================
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// =========================
// ⏳ Countdown Timer
// =========================
const eventDate = new Date("2025-10-26T09:00:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p>Acara telah dimulai 🎉</p>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// =========================
// 📸 Lightbox Gallery
// =========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// =========================
// 🦋 Generate Butterflies
// =========================
const butterflies = document.getElementById("butterflies");
for (let i = 0; i < 6; i++) {
  const bf = document.createElement("div");
  bf.className = "butterfly";
  bf.style.left = Math.random() * 100 + "vw";
  bf.style.animationDuration = 8 + Math.random() * 5 + "s";
  bf.style.animationDelay = Math.random() * 5 + "s";
  butterflies.appendChild(bf);
}

// ⭐ Generate Stars
const stars = document.getElementById("stars");
for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 1 + Math.random() * 2 + "s";
  stars.appendChild(star);
}
