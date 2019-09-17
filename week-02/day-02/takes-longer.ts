'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let preQuote: string;
let aftrQuote: string;
let place: number;

function noobie(noobie){
    let place: number = noobie.indexOf('It', 0);
    preQuote= noobie.substring(0, place + 2);
    aftrQuote=noobie.substring(place + 2);
    
    return preQuote + " always takes longer than " + aftrQuote;
}

function asd(thingy) {
    let place: number = thingy.indexOf('It', 0);
    let splitted = thingy.split("");
    splitted.splice(place + 2, 0, ' always takes longer than');

    let result = splitted.join(''); 
    return result;
}
noobie(quote);
//console.log(asd(quote));