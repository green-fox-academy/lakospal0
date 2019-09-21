'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


//left and right part
function leftAndRight(leftX:number,leftY:number,rightX:number,rightY:number){
    ctx.beginPath();
    ctx.strokeStyle ="red";
    ctx.moveTo(leftX,leftY);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.moveTo(rightX,rightY);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.stroke();
}

for(let i:number=canvas.height;i>=0;i-=20){
    leftAndRight(0,i,canvas.width,i);
}

// the upper and bottom part
function upAndDown(upperX:number,upperY:number,bottomX:number,bottomY:number){
    ctx.beginPath();
    ctx.strokeStyle ="red";
    ctx.moveTo(upperX,upperY);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.moveTo(bottomX,bottomY);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.stroke();
}

for(let i:number=canvas.width;i>=0;i-=20){
    upAndDown(i,0,i,canvas.height);
}


