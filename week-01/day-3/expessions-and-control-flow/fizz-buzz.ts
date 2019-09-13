'use strict';
let number: number;
let fizzBuzz: string = "";
for (number = 1; number < 101; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        fizzBuzz = "FizzBuzz";
        console.log(fizzBuzz);
    } else if (number % 5 == 0) {
        fizzBuzz = "Buzz";
        console.log(fizzBuzz);
    } else if (number % 3 == 0) {
        fizzBuzz = "Fizz";
        console.log(fizzBuzz);
    } else {
        console.log(number);
    }
}
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.