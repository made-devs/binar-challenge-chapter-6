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
      "usergamebiodata",
      [
        {
          usergameId: 1,
          dob: new Date(),
          pob: "Kudus",
          city: "Bekasi",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usergameId: 2,
          dob: new Date(),
          pob: "Demak",
          city: "Ngawi",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usergameId: 3,
          dob: new Date(),
          pob: "Solok",
          city: "Jonggol",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usergameId: 4,
          dob: new Date(),
          pob: "Kendari",
          city: "Sleman",
          gender: "male",
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
    await queryInterface.bulkDelete("usergamebiodata", null, {});
  },
};
