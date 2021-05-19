const { Phrase } = require('../models');

const phraseData = [
    { 
        
    }
];

const seedPhrase = () => Phrase.bulkCreate(phraseData);
module.exports = seedPhrase;