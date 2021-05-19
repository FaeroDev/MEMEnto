const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Phrase extends Model {}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: DataTypes.STRING,
    },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Url',
    }
);

module.exports = Url;