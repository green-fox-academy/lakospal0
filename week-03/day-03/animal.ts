class Animal {
     private _hunger: number = 50;
    private _thirst: number = 50;

    eat() {
        this._hunger--;
    }
    drink() {
        this._thirst--;
    }
    play(){
        this._hunger ++;
        this._thirst ++;
    }
    getPlay(){
        console.log(this._thirst,this._hunger);
    }
    getHunger(){
        console.log(this._hunger)
    }
}

let monkey = new Animal();
monkey.play();
monkey.getPlay();