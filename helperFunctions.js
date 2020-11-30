const getAction = (actionList) => {
    return actionList[Math.floor(Math.random() * Math.floor(actionList.length))];
};

const getAnimal = (animalList) => {
    return animalList[Math.floor(Math.random() * Math.floor(animalList.length))];
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
        action = action;
    } else {
        action = action.slice(0, actionSlice);
    };

    // if we have a smaller animal name length, leave it be. otherwise lets cut that up!
    if (animal.length < animalSlice) {
        animal = animal;
    } else {
        animal = animal.slice(0, animalSlice);
    };

    // how about we flip between the order of the words?
    if (decider === 0) {
        return action + animal;
    } else {
        return animal + action;
    };
};

const getSentenceStructure = (sentenceList) => {
    return sentenceList[Math.floor(Math.random() * Math.floor(sentenceList.length))];
};

const getExpletive = (expletiveList) => {
    return expletiveList[Math.floor(Math.random() * Math.floor(expletiveList.length))];
}

const getTweet = (sentenceStructure, pokemonName, actionOne, actionTwo, randomInt, expletive) => {
    let tweet = sentenceStructure.replace(/pokemonName/gi, pokemonName);
    tweet = tweet.replace('actionOne', actionOne);
    tweet = tweet.replace('actionTwo', `${actionTwo}'ed`);
    tweet = tweet.replace('randomInt', randomInt);
    tweet = tweet.replace('expletive', expletive);
    return tweet;
}

module.exports = { getAnimal, getAction, getPokemonName, getSentenceStructure, getExpletive, getTweet };