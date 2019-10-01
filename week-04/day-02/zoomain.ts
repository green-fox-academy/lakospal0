import { Mammal,Reptile,Bird } from "./zoo"

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getname()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getname()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getname()} is breeding by ${bird.breed()}`);