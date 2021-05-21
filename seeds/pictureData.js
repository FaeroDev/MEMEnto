const { Picture } = require("../models");

const pictureData = [{}];

const seedPictures = () => Picture.bulkCreate(pictureData);
module.exports = seedPictures;
