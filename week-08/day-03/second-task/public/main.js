'use strict'
const btnLuvcat = document.getElementById('btncat');
const btnSzájnáp = document.getElementById('btnszájnáp');
const dog = document.getElementById('dog');
const cat = document.getElementById('cat');
const input = document.getElementsByTagName('input');
const proba = document.getElementById('on');


btnLuvcat.disabled = true;
btnSzájnáp.disabled = true;

input.addEventListener('click', function() {
    if (dog.checked === true || cat.checked === true) {
        btnSzájnáp.disabled = false;

    }
})