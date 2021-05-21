const { Phrase } = require('../models');

const phraseData = [
    { 
        phrase : "test phrase",
        picture_id : 1
    }
];

const seedPhrase = () => Phrase.bulkCreate(phraseData);
module.exports = seedPhrase;
