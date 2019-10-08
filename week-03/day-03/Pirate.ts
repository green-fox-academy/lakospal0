'use strict'


export class Pirate {
  protected _name: string;
  protected _rumCounter: number = 0;
  protected _isDead: boolean;

  constructor(name: string, isDead: boolean = false, ) {
    this._name = name;
    this._isDead = isDead;
  }
  public drinkSomeRum(): number {
    if (this._isDead == true) {
      console.log("the pirate is deddddd")
    } else {
      this._rumCounter++;
      return this._rumCounter;
    }
  }
  public howsItGoingMate(): void {
    if (this._rumCounter <= 4) {
      console.log("Pour me anudder!")
    } else {
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }
  }
  public die(): boolean {
    this._isDead = true;
    return this._isDead;
  }
  public brawl(element: Pirate) {
    if (element._isDead == true) {
      console.log(element._name + " is already dead")
    } else {
      let brawl = Math.floor(Math.random() * 3) + 1;
      if (brawl == 1) {
        console.log("Both pirates are dead.");
      } else if (brawl == 2) {
        console.log(this._name + " is dead.");
      } else if (brawl == 3) {
        console.log(element._name + " is dead.");
      }
    }
  }
}
