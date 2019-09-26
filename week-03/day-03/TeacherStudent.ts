class Student{
    learn(){
        console.log("I am learning something new.")
    }
    question(teacher:Teacher){
        teacher.answer();
    }
}

class Teacher {
    answer(){
        console.log("I am saying something clever.")
    }
    teach(student:Student){   
        student.learn();
    }

}


let Józsika = new Student();
let Teréz = new Teacher();

Teréz.teach(Józsika);
Józsika.question(Teréz);