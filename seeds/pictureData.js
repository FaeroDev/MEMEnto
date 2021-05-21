const { Picture } = require("../models");

const pictureData = [
    {
        url: "https://i.imgur.com/iRtrBOr.jpg",
        description: "Always has been"
    },
    {
        url: "https://i.kym-cdn.com/entries/icons/original/000/034/084/cover6.jpg",
        description: "Buff Doge vs Cheems"
    },
    {
        url: "https://imgflip.com/s/meme/Change-My-Mind.jpg",
        description: "Change my mind"
    }
];

const seedPictures = () => Picture.bulkCreate(pictureData);
module.exports = seedPictures;
