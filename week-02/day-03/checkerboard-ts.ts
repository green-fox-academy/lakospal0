'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function checker(width, height, color, size) {
    ctx.fillStyle = color;
    ctx.strokeRect(width, height, size, size);
    ctx.fillRect(width, height, size, size);
    ctx.fill();
}

let i: number;
let col: string;
let size: number = 40;
let k: number;

for (k = 0; k <= 400; k += 40) {
    for (i = 0; i <= 600; i += 40) {
        //2. sor, 1. 2. elem
        if (i % 80 == 0 && k % 80 == 0) {
            col = "white";
        } else if (i % 80 !== 0 && k % 80 == 0) {
            col = "black";
        }
        //2. sor 1. 2. elem
        else if (i % 80 == 0 && k % 80 !== 0) {
            col = "black";
        } else if (i % 80 !== 0 && k % 80 !== 0) {
            col = "white";
        }
        checker(i, k, col, size)
    }
}


