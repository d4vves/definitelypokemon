const Twitter = require('twitter');
const twitterConfig = require('./config');
const Tweet = new Twitter(twitterConfig);
const {
    getAnimal,
    getAction,
    getPokemonName,
    getSentenceStructure,
    getTweet, getExpletive
} = require('./helperFunctions');
const actionList = require('./actions');
const animalList = require('./animals');
const expletiveList = require('./expletives');
const sentenceList = require('./sentences');

let sentenceStructure = getSentenceStructure(sentenceList);
let pokemonName = getPokemonName(getAnimal(animalList), getAction(actionList));
let actionOne = getAction(actionList);
let actionTwo = getAction(actionList);
let randomInt = Math.floor(Math.random() * 251);
let expletive = getExpletive(expletiveList);
let tweet = getTweet(sentenceStructure, pokemonName, actionOne, actionTwo, randomInt, expletive);

Tweet.post("statuses/update", { tweet })
  .then((res) => {
    if (!res) return;
    console.log(res);
    console.log(tweet);
  })
  .catch((error) => {
    console.log(`🚦 ${error} 🚦`);
    throw error;
  });