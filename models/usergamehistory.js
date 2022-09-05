"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usergamehistory extends Model {
    static associate(models) {
      usergamehistory.belongsTo(models.usergame);
    }
  }
  usergamehistory.init(
    {
      usergameId: DataTypes.INTEGER,
      time: DataTypes.DATE,
      result: DataTypes.ENUM("win", "draw", "lose"),
    },
    {
      sequelize,
      modelName: "usergamehistory",
    }
  );
  return usergamehistory;
};
