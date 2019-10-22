//1) replace the list items' content with items from this list:
//['apple', 'banana', 'cat', 'dog']
//2) change the <ul> element's background color to 'limegreen'
//- use css class to change the color instead of the style property

let words = ["apple", "banana", "cat", "dog"];
console.log(words)
let lists = document.querySelectorAll("li");
console.log(lists.length);
for (let i = 0; i < lists.length; i++) {
    lists[i].innerText = words[i];
}
let colorChanger = document.querySelector("ul");
colorChanger.setAttribute("class", "pacal");