'use strict';
import { Dog, Parrot, Cat, Animal } from "./animal"

class Shelter {
  protected _budget: number;
  protected _animals: Animal[] = [];
  protected _adoptersName: string[] = [];

  constructor(budget: number = 50) {
    this._budget = budget;
  }

  public rescue(animal: Animal) {
    this._animals.push(animal);
    return this._animals.length;
  }
  public heal(): number {
    for (let i = 0; i < this._animals.length; i++) {
      if (this._animals[i].isHealthy == false && this._budget >= this._animals[i].healCost) {
        this._animals[i].heal();
        this._budget -= this._animals[i].healCost;
        return 1;
      }
    }
    return 0;
  }
  public addAdopter(name: string): void {
    this._adoptersName.push(name);
  }
  public earnDonation(amount: number):number{
    this._budget += amount;
    return this._budget;
  }
  public toString(){
    
  }
}

