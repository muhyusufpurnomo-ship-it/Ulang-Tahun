

/* =========================
   OPENING BUTTON CONTROL
========================= */

const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const opening = document.querySelector(".opening");

openBtn.addEventListener("click", () => {

    opening.style.opacity = "0";
    opening.style.transition = "1.5s ease";

    setTimeout(() => {
        opening.style.display = "none";
        content.style.display = "block";
    }, 1500);

});

/* =========================
   MUSIC CONTROL
========================= */

const music = document.getElementById("music");

let musicStarted = false;

// tombol manual (tetap boleh)
document.getElementById("playMusic").addEventListener("click", () => {
    music.play();
});

document.getElementById("pauseMusic").addEventListener("click", () => {
    music.pause();
});

// START MUSIK HANYA SAAT BUKA SURAT
openBtn.addEventListener("click", () => {

    opening.style.opacity = "0";
    opening.style.transition = "1.5s ease";

    setTimeout(() => {
        opening.style.display = "none";
        content.style.display = "block";

        if (!musicStarted) {
            music.play();
            musicStarted = true;
        }

    }, 1500);

});


/* =========================
   COUNTDOWN KE 21 JUNI 2026
========================= */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Target tanggal ulang tahun
const targetDate = new Date("June 21, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = days < 0 ? "00" : days;
    hoursEl.innerHTML = hours < 0 ? "00" : hours;
    minutesEl.innerHTML = minutes < 0 ? "00" : minutes;
    secondsEl.innerHTML = seconds < 0 ? "00" : seconds;
}

setInterval(updateCountdown, 1000);


/* =========================
   SLIDER FOTO OTOMATIS
========================= */

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);


/* =========================
   HEART ANIMATION (FALLING LOVE)
========================= */

function createHeart() {

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    // posisi random
    heart.style.left = Math.random() * 100 + "vw";

    // ukuran random
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    // durasi jatuh random
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.getElementById("hearts").appendChild(heart);

    // hapus setelah jatuh
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// jalankan tiap 300ms
setInterval(createHeart, 300);

/* =========================
   SMOOTH EFFECT ON LOAD
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "1.5s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);

});


/* =========================
   FIREWORKS EFFECT 🎆
========================= */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            speedX: (Math.random() - 0.5) * 6,
            speedY: (Math.random() - 0.5) * 6,
            life: 100
        });
    }
}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

/* klik layar untuk kembang api */
document.addEventListener("click", function(e) {
    createFirework(e.clientX, e.clientY);
});

/* =========================
   PASSWORD UNLOCK SYSTEM
========================= */


/* =========================
   TYPEWRITER TEXT EFFECT
========================= */

const typeText = document.getElementById("typeText");

const text = "Masukkan password rahasia untuk membuka❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typeText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();


/* =========================
   PASSWORD SYSTEM UPGRADE
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const lockScreen = document.getElementById("lockScreen");
const errorMsg = document.getElementById("errorMsg");
const lockBox = document.querySelector(".lockBox");

// 🔑 PASSWORD
const PASSWORD = "210605";

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === PASSWORD) {

        errorMsg.innerHTML = "❤️ Benar...";

        lockScreen.style.transition = "1.2s ease";
        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 1200);

    } else {

        errorMsg.innerHTML = "❌ Password salah... coba lagi sayang";

        // shake effect
        lockBox.classList.add("shake");

        setTimeout(() => {
            lockBox.classList.remove("shake");
        }, 500);

        // clear input
        passwordInput.value = "";
    }

});