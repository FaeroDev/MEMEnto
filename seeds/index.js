const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPicture = require('./pictureData');
const seedPhrase = require('./phraseData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedPicture();

    await seedPhrase();

    process.exit(0);
};

seedAll();