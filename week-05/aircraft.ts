'use strict';

export class Aircraft {
  protected _currentAmmo: number = 0;
  protected _maxAmmo: number;
  protected _baseDmg: number;
  protected _whatIsIt: boolean;
  constructor(maxAmmo: number = 0, baseDmg: number = 0) {
    this._maxAmmo = maxAmmo;
    this._baseDmg = baseDmg;
  }
  public fight(): number {
    this._currentAmmo = 0;
    let dmgDeal = this._maxAmmo * this._baseDmg;
    return dmgDeal;
  }
  public refill(number: number): number {
    if (number <= this._maxAmmo) {
      this._currentAmmo += number
      let remain: number = 0;
      return remain;
    } else {
      this._currentAmmo = this._maxAmmo
      let remain: number = number - this._maxAmmo;
      return remain;
    }
  }
  public getType(): string {
    if (this._whatIsIt) {
      return "F35"
    } else {
      return "F16"
    }
  }
  public getStatus():any {
    return "Type: "+this.getType()+", Ammo: " +this._currentAmmo +", Base Dam: "+ this._baseDmg+", All dmg: "+ this._currentAmmo*this._baseDmg;
  }
  public isPriority(){
    if(this._whatIsIt){
      return true;
    }else{
      return false;
    }
  }
}

export class F16 extends Aircraft {
  protected _whatIsIt: boolean = false;
  constructor(maxAmmo: number = 8, baseDmg: number = 30) {
    super(maxAmmo, baseDmg)
  }
}

export class F35 extends Aircraft {
  protected _whatIsIt: boolean = true;
  constructor(maxAmmo: number = 12, baseDmg: number = 50) {
    super(maxAmmo, baseDmg)
  }
}

let f35 = new F35();
f35.refill(5);
f35.getStatus();
console.log(f35.getStatus());