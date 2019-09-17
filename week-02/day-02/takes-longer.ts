'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let preQuote:string;
let aftrQuote:string;
let place: number;


function noobie(noobie){
    preQuote= noobie.substring(0,20);
    aftrQuote=noobie.substring(20);
    return preQuote + " always takes longer than"+aftrQuote;

}
console.log(noobie(quote))


/*function asd(thingy) {
    let place: number= thingy.indexOf('It', 0);
    thingy.split("").splice(place, 0, 'always takes longer than');
    return thingy;
}*/
//console.log(asd(quote));