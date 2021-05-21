const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedPicture = require('./pictureData');
const seedPhrase = require('./phraseData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLogin();

    await seedPicture();

    await seedPhrase();

    process.exit(0);
};

seedAll();