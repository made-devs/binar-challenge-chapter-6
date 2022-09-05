"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usergames",
      [
        {
          username: "shafar",
          password: "ewfwef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ilfan",
          password: "eeiteiet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "kemal",
          password: "14141",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "fathur",
          password: "54t4t2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usergames", null, {});
  },
};
