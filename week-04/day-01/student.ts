import { Person } from "./person"

export class Student extends Person {
    protected _previousOrganization: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = "School of life") {
        super(name, age, gender);
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }

    protected specialGetGoal(): string {
        return (" Be a junior software developer.")
    }
    protected specialIntroduction(): string {
        return " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.";
    }
    skipDays(numberOfDays): number {
        this._skippedDays += numberOfDays;
        return this._skippedDays;
    }
}