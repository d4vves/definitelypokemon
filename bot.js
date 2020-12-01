const Twitter = require('twitter');
const twitterConfig = require('./lib/config');
const Tweet = new Twitter(twitterConfig);
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

let sentenceStructure = getSentenceStructure(sentenceList);
let pokemonName = getPokemonName(getAnimal(animalList), getAction(actionList));
let actionOne = getAction(actionList);
let actionTwo = getAction(actionList);
let randomInt = Math.floor(Math.random() * 251);
let expletive = getExpletive(expletiveList);
let event = (getEvent(eventList));
let status = getTweet(sentenceStructure, pokemonName, actionOne, actionTwo, randomInt, expletive, event);

Tweet.post("statuses/update", { status })
  .then((res) => {
    if (!res) return;
    console.log(res);
    console.log(status);
  })
  .catch((error) => {
    console.log(`🚦 🚦`, error);
    throw error;
  });