"use strict"

abstract class Animal {
    protected _name: string;
    protected _age: number;
    protected _gender: string;
    protected _howMove: string;

    constructor(name?: string, age?: number, gender?: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

     getname(): string{
         return "";
     }
     getAge(): number{
         return ;
     }
     getGender(): string{
         return "";
     }
     breed(): string{
         return ""
     }
     howMove(): string{
         return "";
     }
     numberOfLegs(): number{
         return ;
     }
}

export class Reptile extends Animal {
    constructor(name?: string, age?: number, gender?: string) {
        super(name, age, gender);

    }
    getname(): string {
        return this._name;
    }
    getGender(): string {
        return "boiii"
    }
    breed(): string {
        return "from egggggggg"
    }
    howMove(): string {
        return "runnin'"
    }
    numberOfLegs(): number {
        return 2;
    }
}
export  class Mammal extends Animal {
    constructor(name?: string, age?: number, gender?: string) {
        super(name, age, gender);

    }
    getname(): string {
        return this._name;
    }
    getGender(): string {
        return "boiii"
    }
    breed(): string {
        return "multiples her/himself"
    }
    howMove(): string {
        return "runnin'"
    }
    numberOfLegs(): number {
        return 4;
    }
    gotHair() {
        console.log("got hair on their thicc body")
    }
}
export class Bird extends Animal {
    constructor(name?: string, age?: number, gender?: string) {
        super(name, age, gender);
    }
    getname(): string {
        return this._name
    }
    getGender(): string {
        return "boiii"
    }
    breed(): string {
        return "from egggggggg"
    }
    howMove(): string {
        return "flyin'"
    }
    numberOfLegs(): number {
        return 2;
    }
    gotFeather() {
        console.log("got feather on their body")
    }

}