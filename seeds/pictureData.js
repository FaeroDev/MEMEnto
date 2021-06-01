const { Picture } = require("../models");

const pictureData = [
    {
        id: 1,
        url: "/images/Always-Has-Been.png",
        description: "Always has been"
    },
    {
        id: 2,
        url: "/images/Buff Doge vs Cheems.jpeg",
        description: "Buff Doge vs Cheems"
    },
    {
        id: 3,
        url: "/images/Change-My-Mind.jpeg",
        description: "Change my mind"
    },
    {
        id: 4,
        url: "/images/Is this a pigeon.jpeg",
        description: "Is this a pigeon"
    },
    {
        id: 5,
        url:"/images/One-Does-Not-Simply.jpeg",
        description:"One does not simply"
    },
    {
        id: 6,
        url:"/images/Surprised Pikachu.png",
        description:"Surprised Pikachu"
    },
    {
        id: 7,
        url:"/images/Unsettled-Tom.jpeg",
        description:"Unsettled Tom"
    },
        {
        id: 8,
        url:"/images/Pepe Silvia.png",
        description :"Pepe Silvia Charlie Explains to Seal"
    },
    {
        id: 9,
        url:"/images/trainhittingbus.png",
        description: "Train Hitting School Bus"
    },
    {
        id: 10,
        url:"/images/Drakeposting.jpg",
        description: "Drake Hotline Bling"
    },
    {
        id: 11,
        url:"/images/Elmo.jpg",
        description: "Elmo"
    },
];

const seedPictures = () => Picture.bulkCreate(pictureData);
module.exports = seedPictures;