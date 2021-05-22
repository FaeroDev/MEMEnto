const { User } = require("../models");

const loginData = [
  {
    username: "fmcdermott4",
    password: "password",
    email: "fmcdermott4@gmail.com",
  },
  {
    username: "pittsannakate",
    password: "password",
  },
  {
    username: "mariocab",
    password: "password",
    email: "yankeescab@gmail.com",
  },
  {
    username: "tkerekes10",
    password: "password",
  },
  {
    username: "pharaohnof",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(loginData);

module.exports = seedUser;
