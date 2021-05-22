const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcryptjs = require("bcryptjs");
class User extends Model {
  checkPassword(samePassword) {
    return bcryptjs.compareSync(samePassword, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);
module.exports = User;
