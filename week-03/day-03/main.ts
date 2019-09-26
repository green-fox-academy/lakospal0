import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

let goodOne:Pokemon[]=[];

for (let i:number=0;i<pokemonOfAsh.length;i++){
    if(pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)){
        goodOne.push(pokemonOfAsh[i]);
    }
}
for(let i:number=0;i<goodOne.length;i++){
    goodOne[i].print();
}
//console.log(goodOne);
// Which pokemon should Ash use?

//console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Charizard2', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
