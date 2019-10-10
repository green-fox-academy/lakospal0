'use strict';

export class Animal {
  protected _ownerName: string;
  protected _animalName: string;
  protected _isHealthy: boolean;
  protected _healCost: number;

  constructor(animalName: string, ownerName: string, isHealthy: boolean, healCost: number) {
    this._animalName = animalName;
    this._ownerName = ownerName;
    this._isHealthy = isHealthy;
    this._healCost = healCost;
  }
  get healCost():number{
    return this._healCost;
  }
  get isHealthy(): boolean {
    return this._isHealthy;
  }
  public heal(): void {
    this._isHealthy = true;
  }
  public isAdoptable(): boolean {
    if (this._isHealthy === true) {
      return true;
    } else {
      return false;
    }
  }
  public toString() {
    if (this.isAdoptable() === false) {
      console.log(this._animalName + " is not healthy " + "(" + this._healCost + ")" + " and not adoptable");
    } else {
      console.log(this._animalName + " is healthy, and adoptable");
    }

  }

}

export class Cat extends Animal {
  constructor(isHealthy: boolean, animalName: string = "Cat", ownerName: string = "No owner") {
    super(animalName, ownerName, isHealthy, Math.floor(Math.random() * (7)))
    this._animalName = animalName;
    this._ownerName = ownerName;
    this._isHealthy = isHealthy;
  }
}

let cat = new Cat(false);
//cat.toString();

export class Dog extends Animal {
  constructor(isHealthy: boolean, animalName: string = "Dog", ownerName: string = "No owner") {
    super(animalName, ownerName, isHealthy, Math.floor(Math.random() * (8) + 1))
    this._animalName = animalName;
    this._ownerName = ownerName;
    this._isHealthy = isHealthy;
  }
}

export class Parrot extends Animal {
  constructor(isHealthy: boolean, animalName: string = "Parrot", ownerName: string = "No owner") {
    super(animalName, ownerName, isHealthy, Math.floor(Math.random() * (10 - 4 + 1) + 4))
    this._animalName = animalName;
    this._ownerName = ownerName;
    this._isHealthy = isHealthy;
  }
}



/*let number = Math.floor(Math.random()*(7));
let number1 = Math.floor(Math.random()*(7));
let number2 = Math.floor(Math.random()*(7));
let number3 = Math.floor(Math.random()*(7));
// 0-6 random number Math.floor(Math.random()*(7));
// 4-10 random number Math.floor(Math.random()*(10-3)+4);
// 1-8 random number Math.floor(Math.random()*(8)+1);
console.log(number,number1,number2,number3);*/