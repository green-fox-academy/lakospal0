'use strict'

import { Pirate } from "./Pirate"

export class Ship {
  protected _pirates: Pirate[] = [];

  fillShip() {
    let crewNumber = Math.floor(Math.random() * 15) + 1;
    let captain = new Pirate("Captain");
    this._pirates.push(captain);
    for (let i = 0; i <= crewNumber; i++) {
      let crew = new Pirate("pirate"+i);
      this._pirates.push(crew);
    }
  }
}

let shippy = new Ship();
shippy.fillShip();
console.log(shippy);
