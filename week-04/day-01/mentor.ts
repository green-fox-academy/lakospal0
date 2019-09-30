import { Person } from "./person"

export class Mentor extends Person {
    protected _level: string;

    constructor(name?: string, age?: number, gender?: string, level: string = "intermediate") {
        super(name, age, gender);
        this._level=level;

    }

    protected specialGetGoal(): string {
        return " Educate brilliant junior software developers."
    }
    protected specialIntroduction(): string {
        return " " + this._level + " mentor."
    }

}