//Create an empty list which will contain names (strings)
let emptyList:string[]= [];
//Print out the number of elements in the list
//Add William to the list
emptyList.push("William");
//Print out whether the list is empty or not

let i:number;
if (emptyList.length==0){
    console.log("The list is empty")
}else {
    console.log("The list is not empty")
}

//Add John to the list
emptyList.push("John")
//Add Amanda to the list
emptyList.push("Amanda")
//Print out the number of elements in the list
console.log(emptyList.length)
emptyList.forEach(function(asd){console.log(asd)})
//Print out the 3rd element
console.log("This is the third element: "+ emptyList[2])
//Iterate through the list and print out each name 
emptyList.forEach(function(asder){console.log(asder)})