'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colors:string[]=["magenta", "blue","yellow","green"];

function square(x,color) {
    ctx.strokeStyle = color;
    ctx.strokeRect((canvas.width/2)-x/2,(canvas.height/2)-x/2, x, x)
    ctx.stroke();
}

let i: number;
for (i = 390; i > 0; i -= 50) {
    let random = Math.random();
    let totalColors = colors.length;
    let randomIndex = Math.floor(random*totalColors);
    let randomColor = colors[randomIndex];
    square(i,randomColor);
}