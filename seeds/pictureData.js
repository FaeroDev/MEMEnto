const { Picture } = require('../models');

const pictureData = [
    { 
        url : "test url"
    }
];

const seedPicture = () => Picture.bulkCreate(pictureData);
module.exports = seedPicture;