class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number = 100;
    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }
    use() {
        this.inkAmount--;
    }
    getUse() {
        console.log(this.inkAmount);
    }

}

let babySharp = new Sharpie("black", 30);
babySharp.use();
babySharp.getUse();
console.log(babySharp);

