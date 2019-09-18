'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function rect(x,y,width,height,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
    ctx.fill();
}

rect(50,50,50,50,"magenta");
rect(150,150,100,100,"green");
rect(500,70,70,70,"blue");
rect(250,250,50,50,"orange");