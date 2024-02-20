const pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

// 1)
// create a loop that prints all
// the pokemon from the pokemon array
// invoke the function to see that it works
const printAll = () => {
  for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i]);
  }
};

printAll();

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pikachu = {
  name: "pikachu",
  element: "electricity",
  strength: 88,
  color: "yellow",
  amountOfLegs: 4,
};

console.log(pikachu);

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log(
  `${pikachu.name} is a ${pikachu.element} pokemon with a strength of ${pikachu.strength}.`
);

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pikachu.stillToCatch = true;
console.log(pikachu);

// 5)
// change the value of the key strength in the Pikachu object.
pikachu.strength = 90000;
console.log(pikachu);

// 6)
// Delete a property from the Pikachu object.
delete pikachu.strength

console.log(pikachu)

// 7)
// Fill up this array with a few more pokemon.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutpokemon = [
  {
    name: "Bulbasaur",
    element: "grass",
    strength: 13,
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32,
  },
  {
    name: "Umbreon",
    element: "dark",
    strength: 5,
  },
  {
    name: "meatbalaton",
    element: "earth",
    strength: 6,
  },
  {
    name: "Onyx",
    element: "rock",
    strength: 32,
  },
  {
    name: "Pichu",
    element: "electricity",
    strength: 10,
  },
];



// 8)
// Print out all the NAMES of the pokemon in this new array.

const printMore = () => {
  for (let i = 0; i < moreAboutpokemon.length; i++) {
    console.log(moreAboutpokemon[i].name);
  }
};

printMore();

// 9)
// Print out something like
// 'Bulbasaur is a grass pokemon with the strength of 32'
// Do this for all the pokemon.

const stringPrint = () => {
  for (let i = 0; i < moreAboutpokemon.length; i++) {
    console.log(
      `${moreAboutpokemon[i].name} is a ${moreAboutpokemon[i].element} pokemon with a strength of ${moreAboutpokemon[i].strength}.`
    );
  }
}

stringPrint()
