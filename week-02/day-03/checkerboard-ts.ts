'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function checker(width, height, color, size) {
    ctx.fillStyle = color;
    ctx.strokeRect(width, height, size, size);
    ctx.fillRect(width, height, size, size);
    ctx.fill()
}

let i: number;
let col: string;
let size: number = 40;
let szaft=0;
let stopThing:number;

for (i = 0; i == 600; i += 40) {
    if (i % 80 == 0) {
        col = "white"}
    else{col = "black"}
    if(i==600){
        szaft+=size;
        i=0;
    }
    checker(i, szaft, col, size)
}

for (stopThing=0;stopThing==10;stopThing++){
    if(stopThing==10){
        i==0;
    }
}