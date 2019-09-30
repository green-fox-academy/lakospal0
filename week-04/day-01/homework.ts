class Person {
    name: string = "Jane Doe";
    age: number = 30;
    gender: string = "female";

    introduce() {
        console.log("Hi, I'm " + this.name + " ,a " + this.age + " year old " + this.gender + ".")
    }
    getGoal() {
        console.log("My goal is:Live for the moment!")
    }
    constructor(name?: string, age?: number, gender?: string) {

    }
}

class Student {
    name: string = "Jane Doe";
    age: number = 30;
    gender: string = "female";
    previousOrganization: string = "School of Life";
    skippedDays: number = 0;

    introduce() {
        console.log("Hi, I'm " + this.name + " ,a " + this.age + " year old " + this.gender + " from" + this.previousOrganization + " who skipped" + this.skippedDays + " days from the course already.");
    }
    skipDays(numberOfDays: number) {
        this.skippedDays += numberOfDays;
    }
    getGoal() {
        console.log("Be a junior software developer.")
    }
    constructor(name?: string, age?: number, gender?: string, previousOrganization?:string) {

    }
}

class Mentor {
    name: string = "Jane Doe";
    age: number = 30;
    gender: string = "female";
    level: string = "intermediate";

    introduce() {
        console.log("Hi, I'm " + this.name + " ,a " + this.age + " year old " + this.gender + " " + this.level + " mentor.")
    }
    getGoal() {
        console.log("Educate brilliant software developers")
    }
    constructor(name?: string, age?: number, gender?: string, level?: string) {

    }
}

class Sponsor {
    name: string = "Jane Doe";
    age: number = 30;
    gender: string = "female";
    comapany: string = "Google";
    hiredStudents: number = 0;

    introduce() {
        console.log("Hi, I'm " + this.name + " ,a " + this.age + " year old " + this.gender + " who represents" + this.comapany + " and hired" + this.hiredStudents + " students so far.")
    }
    getGoal() {
        console.log("Hire brilliant junior software developers.")
    }
    constructor(name?: string, age?: number, gender?: string, company?: string) {

    }
    hire() {
        this.hiredStudents += 1;
    }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});