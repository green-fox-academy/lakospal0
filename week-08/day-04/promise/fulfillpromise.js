'use strict';

let promise = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!')
    }, 300);
});

promise.then(function(value) {
    console.log(value)
});
// Your solution here

// Your solution here