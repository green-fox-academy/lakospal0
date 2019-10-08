export class Sharpie {
     color: string;
     width: number;
     inkAmount: number = 100;
    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }
    use() {
        this.inkAmount -=150;
    }
    getUse() {
        console.log(this.inkAmount);
    }

}
let babySharp = new Sharpie("black", 30);
babySharp.use();
babySharp.getUse();

