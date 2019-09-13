'use strict';

// Create a program that prints all the even numbers between 0 and 500

let number: number = 1;
while (number < 500) {
    if (number % 2 == 0) {
        console.log(number);
        number++;
    } else {
        number++;
    }
}