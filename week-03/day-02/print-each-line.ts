// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

declare function require(path: string): any;
export{};
let fs= require("fs");

let readMe:string= "";

try {
 readMe= fs.readFileSync("my-file.txt","utf8");
}

catch(error){
    console.log("Unable to read file: my-file.txt")
}

console.log(readMe);
