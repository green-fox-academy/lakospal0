'use strict';
import { Dog,Parrot,Cat, Animal} from "./animal"

class Shelter {
  protected _budget:number;
  protected _animals:Animal[]=[];
  protected _adoptersName:string[]=[];
  
  constructor(budget:number=50){
    this._budget=budget;
  }

  public rescue(animal:Animal){
    this._animals.push(animal);
    return this._animals.length;
  }
  public heal(){
    for(let i=0;i < this._animals.length;i++){
      if(this._animals[i].isHealthy == false){

      }
    }
  }
}

