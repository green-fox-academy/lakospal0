// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let num: number = 4;
let i;

let result = sum(num);
console.log(result);



function sum(sumOfNums) {
    let a = 0;
    for (i = 0; i <= sumOfNums; i++) {
        a += i;
    }
    return a;
}
