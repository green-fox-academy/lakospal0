import { Student } from "./student"
import { Mentor } from "./mentor"

export class Cohort {
    protected _name: string;
    protected _students: Student[];
    protected _mentors: Mentor[];

    constructor(name: string) {
        this._name=name;
        this._students = [];
        this._mentors = [];
    }
    addStudent(studentToBeAdded: Student) {
        this._students.push(studentToBeAdded);
    }
    addMentor(mentorToBeAdded: Mentor) {
        this._mentors.push(mentorToBeAdded);
    }
    info() {
        console.log("The " + this._name + " cohort has" + this._students.length + " students and " + this._mentors.length + " mentors.")
    }
}