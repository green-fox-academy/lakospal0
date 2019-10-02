export class Sum {
   _intArray:number []=[1,2,3];
  szummaSzummarum(){

    let summa:number=0;
    for (let i=0;i<this._intArray.length;i++){
      summa +=this._intArray[i];
    }
    return summa;
  }
}