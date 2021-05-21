const Login = require("./login");
const Picture = require("./picture");
const Phrase = require("./phrase");

Picture.hasMany(Phrase, {
    foreignKey: 'picture_id'
  });
  
Phrase.belongsTo(Picture, {
    foreignKey: 'picture_id'
  });

  module.exports = { Login, Picture, Phrase };
