const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Phrase extends Model {};

Phrase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    upper_text: {
      type: DataTypes.STRING,
    },
    lower_text: {
      type: DataTypes.STRING,
    },
    picture_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'picture',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "phrase",
  }
);

module.exports = Phrase;
