class Station {
    gasAmount: number;

    constructor() {
        this.gasAmount = 500;
    }

    refill(car: Car) {
        this.gasAmount--;
        car.gasAmount++;
    }
}

class Car {
    gasAmount: number;
    capacity: number;
    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }

}

let shell = new Station();
let audi = new Car();

shell.refill(audi);
console.log(shell.gasAmount);
console.log(audi.gasAmount);