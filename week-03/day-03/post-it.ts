class PostIt {
    private backgroundColor: string;
    private text: string;
    private textColor: string;
    constructor(backGroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backGroundColor;
        this.text = text;
        this.textColor = textColor;

    }
}

let orange = new PostIt("orange", "Idea1", "blue");
let pink = new PostIt("pink", "Awesome", "black");
let yellow = new PostIt("yellow", "Superb!", "green");

console.log(orange);


