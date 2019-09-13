'use strict';

let a: number = 3+10;
// make it bigger by 10

console.log("a : " + a);
// ---------------------------------------------
let b: number = 100-7;
// make it smaller by 7

console.log("b: "+ b);
// ---------------------------------------------
let c: number = 44*2;
// double c's value

console.log("c: " + c);
// ---------------------------------------------
let d: number = 125/5;
// divide d's value by 5

console.log("d: " + d);
// ---------------------------------------------
let e: number = 8**2;
// what's the cube of e's value?

console.log("e: " + e);
// ---------------------------------------------
let f1: number = 123;
let f2: number = 345;
let bool: boolean= true;
let loob: boolean= false;
// tell if f1 is bigger than f2 (as a boolean)
if (f1>f2){
    console.log("f: " + bool)
}else {
    console.log("f: " + loob)
    };
// ---------------------------------------------
let g1: number = 350;
let g2: number = 200;
let bol: boolean = true;
let lob: boolean = false;
if (g2*2>g1){
    console.log("g: "+ bol)
}else {
    console.log("g: " + lob)
}
// tell if the double of g2 is bigger than g1 (pras a boolean)
// ---------------------------------------------
let h: number = 1357988018575474;
let divis: number = h%11;
let booli: boolean = true;
let iloob: boolean = false;
// tell if 11 is a divisor of h (as a boolean)
if (divis=0){
    console.log("h: " + booli)
}else {
    console.log("h: " + iloob)
};
// ---------------------------------------------
let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1>i2**2 && i1<i2**3);
let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log(j%3>0 || j%5>0);