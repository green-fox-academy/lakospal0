'use strict';

class Aircraft {
  protected _currentAmmo: number = 0;
  protected _maxAmmo: number;
  protected _baseDmg: number;
  constructor(maxAmmo: number = 0, baseDmg: number = 0) {
    this._maxAmmo = maxAmmo;
    this._baseDmg = baseDmg;
  }
  public fight(): number {
    this._currentAmmo = 0;
    let dmgDeal = this._maxAmmo * this._baseDmg;
    return dmgDeal;
  }
  public refill(number: number) {
    if (number <= this._maxAmmo){
      this._currentAmmo += number
      let remain:number = number - this._maxAmmo
      return remain;
    }else {
        this._currentAmmo = this._maxAmmo
        let remain:number= number - this._maxAmmo;
      return remain;
    }
  }
}

class F16 extends Aircraft {
  constructor(maxAmmo: number = 8, baseDmg: number = 30) {
    super(maxAmmo, baseDmg)
  }
}

class F35 extends Aircraft {
  constructor(maxAmmo: number = 12, baseDmg: number = 50) {
    super(maxAmmo, baseDmg)
  }
}

let f35 = new F35();
console.log(f35.refill(100))