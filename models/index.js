const Login = require('./login');
const Picture = require('./picture');
const Phrase = require('./phrase');

Picture.hasMany(Phrase, {
  foreignKey: 'id',
});

Phrase.belongsTo(Picture, {
  foreignKey: 'picture_id',
});

module.exports = { Login, Picture, Phrase };