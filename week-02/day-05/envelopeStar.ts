'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvHeight: number = canvas.height;
let canvWidth: number = canvas.width;

function fusRoDah(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = " black";
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.stroke();
}

fusRoDah(canvWidth / 2, canvHeight);

function fusRoDah2(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = " black";
    ctx.moveTo(0, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

fusRoDah2(canvWidth, canvHeight / 2);

function botLeft(x, y, q, w) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(x, y);
    ctx.lineTo(q, w);
    ctx.stroke();

}

let x: number = canvas.width / 2;
let q: number = canvas.width / 2;
let w: number = canvas.height / 2;

for (let y = canvas.height; y >= canvas.height / 2; y -= 10) {
    q-=10
    botLeft(x,y,q,w);
}

function topLeft(mvtoX, mvtoY, lntoX, lntoY) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(mvtoX, mvtoY);
    ctx.lineTo(lntoX,lntoY);
    ctx.stroke();

}

let mvtoX:number=canvas.width/2;
let lntoX:number=0;
let lntoY:number= canvas.height/2;

for(let mvtoY=canvas.height/2;mvtoY>=0;mvtoY-=10){
    lntoX+=10
    topLeft(mvtoX,mvtoY,lntoX,lntoY)
}

function botRight(brmvX, brmvY, brlnX, brlnY) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(brmvX, brmvY);
    ctx.lineTo(brlnX,brlnY);
    ctx.stroke();

}

let brmvX:number=canvas.width/2;
let brlnX:number=canvas.width/2;
let brlnY:number=canvas.height/2;

for(let brmvY=canvas.height;brmvY>=canvas.height/2;brmvY-=10){
    brlnX+=10
    botRight(brmvX,brmvY,brlnX,brlnY)
}


function topRight(trmvX, trmvY, trlnX, trlnY) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(trmvX, trmvY);
    ctx.lineTo(trlnX,trlnY);
    ctx.stroke();

}

