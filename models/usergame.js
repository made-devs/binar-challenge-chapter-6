"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usergame extends Model {
    static associate(models) {
      // define association here
      usergame.hasOne(models.usergamebiodata);
      usergame.hasMany(models.usergamehistory);
    }
  }
  usergame.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usergame",
    }
  );
  return usergame;
};
