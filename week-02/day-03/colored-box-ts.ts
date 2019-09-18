'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
//600,400
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(300,200);
ctx.lineTo(300, 80);//300,80
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="purple";
ctx.moveTo(300,80);
ctx.lineTo(180, 80);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.moveTo(180,80);
ctx.lineTo(180, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.moveTo(180,200);
ctx.lineTo(300,200);
ctx.stroke();