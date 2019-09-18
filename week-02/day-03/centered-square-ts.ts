'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
//x=600,y=400

//bal felső->bal alsó
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.moveTo(canvas.width/2-5,canvas.height/2-5);
ctx.lineTo(canvas.width/2-5, canvas.height/2+5);
ctx.stroke();

//bal alsó->jobb alsó
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.moveTo(canvas.width/2-5,canvas.height/2+5);
ctx.lineTo(canvas.width/2+5, canvas.height/2+5);
ctx.stroke();

//jobb alsó -> jobb felső
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.moveTo(canvas.width/2+5,canvas.height/2+5);
ctx.lineTo(canvas.width/2+5, canvas.height/2-5);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.moveTo(canvas.width/2+5,canvas.height/2-5);
ctx.lineTo(canvas.width/2-5, canvas.height/2-5);
ctx.stroke();
