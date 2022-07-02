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
function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    c.strokeStyle = "blue";
    c.stroke();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}
let circle = new Circle(100, 150, 20, 3, 4);

const circleArray = [];
for (let i = 0; i < 100; i++) {
  const radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  circleArray.push(new Circle(x, y, radius, dx, dy));
}
// console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}
animate();
