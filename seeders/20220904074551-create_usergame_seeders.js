"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("usergames", null, {});
  },
};
