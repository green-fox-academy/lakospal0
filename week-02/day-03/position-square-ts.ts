'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function square(x,y,){
    ctx.beginPath();
    ctx.fillStyle="magenta";
    ctx.moveTo(x,y);
    ctx.fillRect(x,y,50,50)
    ctx.fill();
}


let i:number;
for(i=0;i<200;i+=50){
    square(i,i);
}


