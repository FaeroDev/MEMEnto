const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedPictures = require('./pictureData');
const seedPhrases = require('./phraseData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLogin();

    await seedPicture();

    await seedPhrase();

    process.exit(0);
};

seedAll();