const Twitter = require('twitter');
const twitterConfig = require('./utils/config');
const twitter = new Twitter(twitterConfig);
const params = require('./utils/params');
const {
    getAnimal,
    getAction,
    getPokemonName,
    getSentenceStructure,
    getTweet,
    getExpletive,
    getEvent,
} = require('./utils/helperFunctions');
const actionList = require('./lib/actions');
const animalList = require('./lib/animals');
const expletiveList = require('./lib/expletives');
const sentenceList = require('./lib/sentences');
const eventList = require('./lib/events');

const getStatus = () => {
    let sentenceStructure = getSentenceStructure(sentenceList);
    let pokemonName = getPokemonName(getAnimal(animalList), getAction(actionList));
    let actionOne = getAction(actionList);
    let actionTwo = getAction(actionList);
    let randomInt = Math.floor(Math.random() * 251);
    let expletive = getExpletive(expletiveList);
    let event = getEvent(eventList)
    let status = getTweet(sentenceStructure, pokemonName, actionOne, actionTwo, randomInt, expletive, event);
    return status;
};

const postStatus = (status) => {
    twitter.post("statuses/update", { status })
        .then((res) => {
            if (!res) return;
            console.log(res);
            console.log(status);
        })
        .catch((error) => {
            console.log(`🚦 🚦`, error);
            throw error;
        });
};

twitter.get('statuses/user_timeline', params)
    .then(res => {
        let status = getStatus();
        let prevStatus = res[0].full_text;
        
        let firstWord = status.split(' ')[0];
        let prevFirstWord = prevStatus.split(' ')[0];

        if(firstWord === prevFirstWord) {
            status = getStatus();
            postStatus(status);
        } else {
            postStatus(status);
        };
    })
    .catch((error) => {
        console.log(`🚦 🚦`, error);
        throw error;
});