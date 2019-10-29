'use strict';

/*const mapWith = (array, callback) => {
    let output = array;
    for (let i = 0; i < output.length; i++) {
        output[i] = callback(output[i]);
    }

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    return output;
}

const addOne = (number) => {
    return number + 1;
};


// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]
*/
// Exercise 2:
const mapWith = (array, callback) => {
    let output = array;
    for (let i = 0; i < output.length; i++) {
        output = callback(output[0]);
    };
    return output;
}

let removeSecondLetter = function(string) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += 2;
    }
    array.splice(counter, 1)
};


// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];
console.log(words[0][0]);


//console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']