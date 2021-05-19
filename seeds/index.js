const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedPictures = require('./picturesData');
const seedPhrases = require('./phrasesData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLogin();

    await seedPictures();

    await seedPhrases();

    process.exit(0);
};

seedAll();