'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.
//600,400

function draw(x,y){
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.stroke();
}
let height=0;

for(let i=0;i<=canvas.width;i+=100){
    draw(i,height)
}
