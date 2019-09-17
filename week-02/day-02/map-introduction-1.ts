let emptyMap = {
    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C',
    100: "X"
}

/* Checks if the object is emtpy - returns true if the obejct IS empty */
function isEmptyObject(objectToCheck) {
    if (Object.keys(emptyMap).length == 0) {
        return true;
    } else {
        return false;
    }
}

/* Prints all the keys of the given Object */
function printAllKeys(objectToPrint) {
    return Object.keys(objectToPrint);
}

/* Prints all the value of the given Object */
function printAllValues(objectToPrint) {
    let result = [];

    for (let key in objectToPrint) {
        let value = objectToPrint[key];
        result.push(value);
    }

    return result;
}

/* Checks how many pairs are in the object */
function howManyPairs(objectToCheck) {
    let result = Object.keys(emptyMap).length;

    return result;
}

/* Add to object */
emptyMap[68] = 'D';

/* Key 99 */
console.log(emptyMap[99]);

/* Delete 97 */
delete emptyMap[97];

/* Check 100th element */
if(emptyMap[100]) {
    console.log('We have a value associated with key 100');
} 

console.log(emptyMap);

/* Delete all the properties */
for (let key in emptyMap) {
    delete emptyMap[key];
}

console.log(emptyMap);
