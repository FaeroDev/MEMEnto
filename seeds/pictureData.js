const { Picture } = require('../models');

const pictureData = [
    { 
        
    }
];

const seedPicture = () => Picture.bulkCreate(pictureData);
module.exports = seedPicture;