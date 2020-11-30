const getAction = (actionList) => {
    return actionList[Math.floor(Math.random() * Math.floor(actions.length))];
};

const getAnimal = (animalList) => {
    return animalList[Math.floor(Math.random() * Math.floor(animals.length))];
};

const getPokemonName = (animal, action) => {
    // random int 0 - 1
    let decider = Math.floor(Math.random() * Math.floor(2));
    // random int  4 - 6
    let actionSlice = Math.floor(Math.random() * Math.floor(3) + 4);
    // a different random int 3 - 5
    let animalSlice = Math.floor(Math.random() * Math.floor(3) + 3);

    // if we have a smaller action length, leave it be. otherwise lets cut that up!
    if (action.length < actionSlice) {
        console.log(`SMALL ACTION: ${action}`);
        action = action;
    } else {
        action = action.slice(0, actionSlice);
        console.log(`NEW ACTION: ${action}`);
    };

    // if we have a smaller animal name length, leave it be. otherwise lets cut that up!
    if (animal.length < animalSlice) {
        console.log(`SMALL ANIMAL: ${animal}`);
        animal = animal;
    } else {
        animal = animal.slice(0, animalSlice);
        console.log(`NEW ANIMAL: ${animal}`);
    };

    // how about we flip between the order of the words?
    if (decider === 0) {
        return action + animal;
    } else {
        return animal + action;
    };
};

module.exports = { getAnimal, getAction, getPokemonName };