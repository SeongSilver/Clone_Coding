const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 150,150, 100);
ctx.strokeRect(200, 300, 150, 200);