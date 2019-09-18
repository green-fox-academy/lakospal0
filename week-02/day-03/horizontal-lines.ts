'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.
//x=600,y=400

function draw(x,y){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y)
    ctx.stroke();
}

let horiz=0;

for (let i=5;i<=canvas.height;i+=70){
    draw(horiz,i)
}
