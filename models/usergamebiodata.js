"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usergamebiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usergamebiodata.belongsTo(models.usergame);
    }
  }
  usergamebiodata.init(
    {
      usergameId: DataTypes.INTEGER,
      dob: DataTypes.DATE,
      pob: DataTypes.STRING,
      city: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
    },
    {
      sequelize,
      modelName: "usergamebiodata",
    }
  );
  return usergamebiodata;
};
