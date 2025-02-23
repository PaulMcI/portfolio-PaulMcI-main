const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let speedMultiplier = 25;
if (canvas.width < 992) {
  speedMultiplier = 5;
}

const stars = [];
const starCount = 500;

function createStar() {
  const speed = Math.random() * speedMultiplier + 1;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width,
    speed,
    originalSpeed: speed,
    radius: Math.random() * 2 + 1
  };
}

for (let i = 0; i < starCount; i++) {
  stars.push(createStar());
}

function updateStars() {
  stars.forEach((star) => {
    star.z -= star.speed;
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
      star.z = canvas.width;
      star.speed = star.originalSpeed;
    }
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';

  stars.forEach((star) => {
    const perspective = canvas.width / star.z;
    const x = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
    const y = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
    const radius = star.radius * perspective;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate() {
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  for (let i = 0; i < starCount; i++) {
    stars.push(createStar());
  }
});