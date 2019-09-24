// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let a:number = 0;

function failPrinter(input){
    if(input==0){
    throw "fail"
    }
    console.log(10/input)
}

failPrinter(a);