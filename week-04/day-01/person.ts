export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    protected specialIntroduction(): string {
        return "."
    }
    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specialIntroduction())
    }
    protected specialGetGoal(): string {
        return "Live for the moment.";
    }
    public getGoal(): void {
        console.log("My goal is: "+this.specialGetGoal())
    }
    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

}