export abstract class Instrument {
    protected _name: string;

    protected specialPlay():string{
        return "";
    }
    public play():void{
        console.log(this.specialPlay());
    }
}

export abstract class StringedInstrument extends Instrument{
    protected _numberOfStrings:number;

    abstract sound():string;
}

export class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings:number=6){
        super();
        this._numberOfStrings=numberOfStrings;
    }
    sound():string{
        return "Twang";
    }
    specialPlay():string{
        return "Electric Guitar, a "+this._numberOfStrings+"-stringed instrument that goes "+this.sound()+".";
    }
}

export class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings:number=4){
        super();
        this._numberOfStrings=numberOfStrings;
    }
    sound():string{
        return "Duum-duum-duum";
    }
    protected specialPlay():string{
        return "Bass Guitar, a "+this._numberOfStrings+"-stringed instrument that goes "+this.sound()+".";
    }

}

export class Violin extends StringedInstrument{
    constructor(numberOfStrings:number=4){
        super();
        this._numberOfStrings=numberOfStrings;
    }
    sound():string{
        return "Screech";
    }
    protected specialPlay():string{
        return "Violin, a "+this._numberOfStrings+"-stringed instrument that goes "+this.sound()+".";
    }
}