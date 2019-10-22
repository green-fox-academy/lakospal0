//1)  Fill every paragraph with the last one's content.
let correctWords = document.querySelector(".animals");
console.log(correctWords.innerText);
let pArray = document.querySelectorAll("p");
console.log(pArray)

for (let i = 0; i < pArray.length; i++) {
    pArray[i].innerText = correctWords.innerText;
}

console.log(pArray);
//2)  Do the same again, but you should keep the cat strong.
for (let i = 0; i < pArray.length; i++) {
    pArray[i].innerHTML = correctWords.innerHTML;
}