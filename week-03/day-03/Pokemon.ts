export class Pokemon {
    name: string;
     type: string;
    effectiveAgainst: string;

    constructor(name: string, type: string, effectiveAgainst: string) {
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }
    print():void{
        console.log(this.name+" "+ this.type+" "+this.effectiveAgainst);
    }
    /*getType():string{
        return this.type;
    }
    getAgainst():string{
        return this.effectiveAgainst;
    }*/
}