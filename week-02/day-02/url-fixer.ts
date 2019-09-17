'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let thingy: string ='https//www.reddit.com/r/nevertellmethebots';
let preThingy: string;
let afterThingy: string;
thingy =thingy.replace("bots","odss")

function asd(thingy){

    preThingy= thingy.substring(0,5);
    afterThingy= thingy.substring(5);
    return preThingy+":"+afterThingy;
}

console.log(asd(thingy));
