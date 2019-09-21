'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let rectWidthAndHight: number = 3;


function createRect(x: number, y: number, widthAndHeight: number) {
    ctx.fillRect(x, y, widthAndHeight, widthAndHeight);
    ctx.fillStyle = "white";
}
for (let i: number = 0; i <= 100; i++) {
    let randomStarsY: number = Math.floor(Math.random() * canvas.width) + 1
    let randomStarsX: number = Math.floor(Math.random() * canvas.width) + 1
    createRect(randomStarsX,randomStarsY,rectWidthAndHight);
}

