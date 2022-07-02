"use strict";
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
// // Rectangle
// c.fillStyle = "blue";
// c.fillRect(100, 100, 50, 50);
// c.fillStyle = "red";
// c.fillRect(150, 250, 50, 50);
// c.fillStyle = "violet";
// c.fillRect(300, 200, 50, 50);
// // Lines
// c.beginPath();
// c.moveTo(40, 40);
// c.lineTo(600, 300);
// c.lineTo(500, 100);
// c.strokeStyle = "pink";
// c.stroke();
// Circle
// c.beginPath();
// c.arc(150, 150, 20, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (let i = 0; i < 10; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 20, 0, Math.PI * 2, false);
//   c.strokeStyle = "red";
//   c.stroke();
// }

// ANIMATION
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
const radius = 30;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 5;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "green";
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();
