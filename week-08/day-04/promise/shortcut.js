let promise = Promise.resolve("addsad")


function bad(error) {
    console.log(error);
}

promise.then(console.log);
promise.catch(bad);