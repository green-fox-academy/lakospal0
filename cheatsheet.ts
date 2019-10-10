//'use strict';
// RANDOM NAME GENERATOR
// 0-6 random number Math.floor(Math.random()*(7));
// 4-10 random number Math.floor(Math.random()*(10-3)+4);
// 1-8 random number Math.floor(Math.random()*(8)+1);
//(large - small + 1) + small 
//---------------------------------------------------------------------------------------------------------
//FILE READ 
/*
'use strict'; 
declare function require(path: string): any;
export{};
const fs = require('fs');

let file:string[];

try {
  file = fs.readFileSync('file to read', 'utf-8');
}
catch{
  console.log("File reading is failed for some reason")
}
-------------------------------------------------------------------------------------------
WRITE
'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

try{
    let myName : string = 'Aboud geha';
    fs.writeFileSync('where to write',what to write,'utf8');
} catch (err) {
    console.log("Unable to write file: my-file.txt");
}
----------------------------------------------------------------------------------------------------
SIMPLE TEST
export class Apple {
    public getApple(): string {
        return 'apple'
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import * as test from 'tape';
import { Apple  } from './Apples';

let redApple = new Apple ;

test('returnApple', t => {
    const actual = redApple.getApple();
    const expected = 'apple';

    t.equal(actual , expected);
    t.end();
});

*/