'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


function square(x,y,){
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.fillStyle="purple";
    ctx.strokeRect(x,y,20,20);
    ctx.fillRect(x,y,20,20);
    ctx.fill();
    ctx.stroke();
}


let i:number;
for(i=10;i<300;i+=20){
    square(i,i);
}