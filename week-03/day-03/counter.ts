class Counter {
    int:number;
    startingNumber:number;
    
    constructor(number?:number) {
        if(number){
            this.int=number;
        }else{
            this.int=0;
        }

        this.startingNumber=this.int;
        
    }
    add(amountOf?:number){
        if(amountOf){
            this.int +=amountOf;
        }else{
            this.int ++;
        }
        
    }
    getInt(){
        console.log(this.int);
    }
    reset(){
        this.int=this.startingNumber;
    }
}
let createdNumber= new Counter();
createdNumber.add(15);
createdNumber.add(15);
createdNumber.reset();
createdNumber.getInt();
