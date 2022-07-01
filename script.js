"use strict";
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
// Rectangle
c.fillStyle = "blue";
c.fillRect(100, 100, 50, 50);
c.fillStyle = "red";
c.fillRect(150, 250, 50, 50);
c.fillStyle = "violet";
c.fillRect(300, 200, 50, 50);
