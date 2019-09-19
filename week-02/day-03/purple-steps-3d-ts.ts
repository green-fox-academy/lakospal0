'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


function square(x, y, ) {
    ctx.beginPath();
    ctx.fillStyle = "magenta";
    ctx.strokeRect(x-y, x-y, y, y);
    ctx.fillRect(x-y, x-y, y, y);
    ctx.fill();
}

let k: number= 0;
let s:number=20;

let i: number;
for (i = 0; i < 5; i ++) {
    k += i*s
    square(k, i*s);
}