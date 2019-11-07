let promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE')
});

function fulfill(value) {
    console.log(value);
}
console.log("MAIN PROGRAM");
promise.then(fulfill);