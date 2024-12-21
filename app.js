const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
 

// Exercise 1
// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58]);
 


// Exercise 2
// console.log(game);



/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Med';



/*
Exercise 4
1. Select a starter Pokemon from the `pokemon` array. Remember, a starter Pokemon's `starter` property is true.
2. Add this Pokemon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[25]); // Pikachu



/*
Exercise 5
1. Choose three more Pokemon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[130]); // Gyarados
game.party.push(pokemon[58]); // Growlithe
game.party.push(pokemon[148]); // Dragonair



/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for(let gym of game.gyms) {
    if(gym.difficulty < 3){
        gym.completed = true;
    }
}

//console.log(game.gyms)



/*
Exercise 7
1. Evolve the starter Pokemon you added to your party earlier. Each starter Pokemon evolves into a specific one.
2. How would you replace the current starter Pokemon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0,1,pokemon[25]);




/*
Exercise 8
1. Print the name of each Pokemon in your party.
2. Consider using a loop or an array method to access each Pokemon's name.

Solve Exercise 8 here:
*/

console.log('Current Pokemon in your party:');
for(let pokemon of game.party){
    console.log(pokemon.name)
}

game.printParty = function () {
    console.log('Current Pokemon in your party:');
    for(let pokemon of game.party){
        console.log(pokemon.name)
    }
}

/*
Exercise 9
1. Can you print out all the starter Pokemon from the `pokemon` array?
2. Think about how you can identify a starter Pokemon and then log their names.


Solve Exercise 9 here:
*/

console.log('The starter Pokemon options are:');
pokemon.forEach(pok => {
    if(pok.starter === true) {
        console.log(pok.name);
    }
});



/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
}



/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokemon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
}

console.log(`Current num. of pokeballs: ${game.items[1].quantity}`);
game.catchPokemon(pokemon[150]);

game.printParty();
console.log(`Current num. of pokeballs: ${game.items[1].quantity}`);



/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for(let gym of game.gyms) {
    if(gym.difficulty < 6) {
        gym.completed = true;
    }
}

//console.log(game.gyms);



/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
    const gymTally = { completed: 0, incomplete: 0 };
    for (let i = 0; i < this.gyms.length; i++) {
        if(this.gyms[i].completed) {
            gymTally.completed += 1;
        } else {
            gymTally.incomplete += 1;
        }
    }
    console.log(gymTally);
};

game.gymStatus();



/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokemon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
    return this.party.length;
}

//console.log(game.partyCount());


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for(let gym of game.gyms) {
    if(gym.difficulty < 8) {
        gym.completed = true;
    }
}

//console.log(game.gyms);



/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);



/*
Exercise 17
1. Arrange the Pokemon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

// Array.sort()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

game.party.sort((a, b) => a.hp - b.hp);
console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = function (pokemonObj) {
    if(game.party.length < 6) {
        game.party.push(pokemonObj);
        game.items[1].quantity -= 1;
        console.log(`"${pokemonObj.name}" added to Party`);
    } else {
        game.collection.push(pokemonObj);
        game.items[1].quantity -= 1;
        console.log(`Reached Party limit: "${pokemonObj.name}" added to Collection`);
    }
    console.log(`Current num. of pokeballs: ${game.items[1].quantity}`);

}

// game.catchPokemon(pokemon[148]);
// game.catchPokemon(pokemon[146]);




/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/


game.catchPokemon = function (pokemonObj) {
    if(game.items[1].quantity > 0) {
        if(game.party.length < 6) {
            game.party.push(pokemonObj);
            game.items[1].quantity -= 1;
            console.log(`"${pokemonObj.name}" added to Party`);
        } else {
            game.collection.push(pokemonObj);
            game.items[1].quantity -= 1;
            console.log(`"${pokemonObj.name}" added to Collection`);
        }
    } else {
        console.log(`Oops. No pokeballs to catch "${pokemonObj.name}"`);
    }
    console.log(`Current num. of pokeballs: ${game.items[1].quantity}`);
}

game.catchPokemon(pokemon[30]);
// game.catchPokemon(pokemon[32]);
// game.catchPokemon(pokemon[34]);
// game.catchPokemon(pokemon[36]);
// game.catchPokemon(pokemon[38]);
// game.catchPokemon(pokemon[40]);

console.log(game.collection)

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

// FIX

game.catchPokemon = function (pokemonName) {
    pokemonName = pokemonName.toLowerCase();
    if(game.items[1].quantity > 0) {
        const index = pokemon.findIndex( p => p.name.toLowerCase() === pokemonName);
        if(index >= 0) {
            if(game.party.length < 6) {
                game.party.push(pokemon[index]);
                game.items[1].quantity -= 1;
                console.log(`"${pokemon[index].name}" added to Party`);
            } else {
                game.collection.push(pokemon[index]);
                game.items[1].quantity -= 1;
                console.log(`"${pokemon[index].name}" added to Collection`);
            }
        } else {
            console.log(`Pokemon not found`);
        } 
    } else {
        console.log(`Oops. No pokeballs to catch "${pokemonName}"`);
    }
    console.log(`Current num. of pokeballs: ${game.items[1].quantity}`);
}
       
game.catchPokemon('PiKacHU');


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

// This solution won't work as seen on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// const result = Object.groupBy(pokemon, ({ type }) => type);


// array.reduce(callbackFn, initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const groupedPokemon = pokemon.reduce((groupsByType, currentPokemon) => {
    const type = currentPokemon.type;
    // Checks if the type already exists as a key.
    if (!groupsByType[type]) {
        groupsByType[type] = [];
    }
    // Adds the current Pokemon
    groupsByType[type].push(currentPokemon);
    return groupsByType;
}, {}); // Our initialValue is an empty object.

console.log(groupedPokemon);