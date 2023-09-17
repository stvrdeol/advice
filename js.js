const api = `https://api.adviceslip.com/advice`;
const desktopImg = document.querySelector(".desktop-img");
const mobileImg = document.querySelector(".mobile-img");
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const diceContainer = document.querySelector(".dice-img-container");
const body = document.querySelector("body");
async function generateAdvice() {
  try {
    adviceText.textContent = "....";
    const response = await fetch(api);
    const data = await response.json();
    adviceId.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    alert(error, "please reload");
  }
}

function changeImg() {
  if (window.innerWidth > 500) {
    desktopImg.style.display = "block";
    mobileImg.style.display = "none";
  } else {
    desktopImg.style.display = "none";
    mobileImg.style.display = "block";
  }
}

changeImg();
generateAdvice();
window.addEventListener("resize", changeImg);
diceContainer.addEventListener("click", generateAdvice);
