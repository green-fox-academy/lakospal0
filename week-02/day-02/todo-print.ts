'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let preDownloadText: string;

function text(thingy) {
    preDownloadText = thingy.substring(0, 11);
    thingy = "My todo: \n" + preDownloadText + "\n" + " -Download games \n" + "\t- Diablo";
    return thingy;
}
console.log(text(todoText));
