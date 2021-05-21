const { Picture } = require("../models");

const pictureData = [
    {
        id: 1,
        url: "https://i.imgur.com/iRtrBOr.jpg",
        description: "Always has been"
    },
    {
        id: 2,
        url: "https://i.kym-cdn.com/entries/icons/original/000/034/084/cover6.jpg",
        description: "Buff Doge vs Cheems"
    },
    {
        id: 3,
        url: "https://imgflip.com/s/meme/Change-My-Mind.jpg",
        description: "Change my mind"
    },
    {
        id: 4,
        url: "https://i.guim.co.uk/img/media/44856f0611a6ae5e8f4e1875772d8f462a7e6f10/0_139_1118_671/master/1118.jpg?width=700&quality=85&auto=format&fit=max&s=3be77831a235ffc09d12cf9d18be5f25",
        description: "Is this a pigeon"
    },
    {
        id: 5,
        url:"https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
        description:"One does not simply"
    },
    {
        id: 6,
        url:"https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png",
        description:"Surprised Pikachu"
    },
    {
        id: 7,
        url:"https://imgflip.com/s/meme/Unsettled-Tom.jpg",
        description:"Unsettled Tom"
    }
];

const seedPictures = () => Picture.bulkCreate(pictureData);
module.exports = seedPictures;