'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleLines(x, y, q, w) {
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo(x, y);
    ctx.lineTo(q, w);
    ctx.stroke();
}

let i: number;
for (i = 600; i > 100; i -= 15) {
    purpleLines(i, 5, 590, i - 90)
}

function greenLines(x, y, q, w) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(x, y);
    ctx.lineTo(q, w);
    ctx.stroke();
}

let k: number;
for (k = 600; k > 100; k -= 15) {
    greenLines(k - 90, 590, 5, k)
}