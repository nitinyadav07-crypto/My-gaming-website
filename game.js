const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
let score = 0;

function moveCircle() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

moveCircle();
