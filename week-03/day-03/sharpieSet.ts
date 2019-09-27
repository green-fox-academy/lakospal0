import { Sharpie } from './sharpie'


class SharpieSet {
    sharpieArray: Sharpie[];

    constructor(listOfSharpies?: Sharpie[]) {
        if (listOfSharpies) {
            this.sharpieArray = listOfSharpies;
        } else {
            this.sharpieArray = [];
        }
    }

    pushSharpies(sharpie: Sharpie):void {
        this.sharpieArray.push(sharpie);
    }

    countUsable():void {
        let useAbleSharpies: number = 0;
        for (let i = 0; i < this.sharpieArray.length; i++) {
            if (this.sharpieArray[i].inkAmount > 0) {
                useAbleSharpies++;
            }
        }
        console.log("The number of usableSharpies are : "+ useAbleSharpies);
    }
    removeTrash(){
        let removedSharpies: number = 0;
        for (let i=0;i<this.sharpieArray.length;i++){
            if(this.sharpieArray[i].inkAmount==0){
                this.sharpieArray.splice(i,1)
                removedSharpies +=1;
            }
        }
        console.log(removedSharpies+" amount of sharpie have been removed") ;
        }

    }



let pinkSharpie = new Sharpie("pink", 15);
let blackSharpie = new Sharpie("black", 30);
let yellowSharpie = new Sharpie("yellow", 10);

let firstSharpieSet = new SharpieSet();

firstSharpieSet.pushSharpies(pinkSharpie);
firstSharpieSet.pushSharpies(blackSharpie);
firstSharpieSet.pushSharpies(yellowSharpie);
firstSharpieSet.countUsable();
firstSharpieSet.removeTrash();


//console.log(firstSharpieSet);