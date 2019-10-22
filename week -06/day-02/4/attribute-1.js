let imgUrl = document.querySelector("img");

console.log(imgUrl);

imgUrl.setAttribute("src", "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg");
console.log(imgUrl.src);

let link = document.querySelector("a");

link.setAttribute("href", "https://www.greenfoxacademy.com/");
let button = document.querySelector(".this-one");
button.disabled = true;

button.innerText = "Don't click me!";