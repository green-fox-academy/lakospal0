'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codinPerWeek:number;
let codinPerSemester:number;
codinPerWeek= 5*6;
codinPerSemester=17*codinPerWeek;
console.log(codinPerSemester);

let fullSemesterHour:number;
let avgCodinSemester:number;
let percentage:number;
fullSemesterHour=17*52;
avgCodinSemester=(codinPerSemester/ fullSemesterHour)*100;
percentage=Math.floor(avgCodinSemester)
console.log(percentage + "%");