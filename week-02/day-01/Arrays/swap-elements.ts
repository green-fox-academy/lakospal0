// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"], a = "Arthur", b = "Chloe";

let addAbc = abc.splice(2, 1, a);
let remAbc = abc.splice(0, 1, b);

console.log(abc);
