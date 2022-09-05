"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 1,
          time: new Date(),
          result: "win",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 1,
          time: new Date(),
          result: "draw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 1,
          time: new Date(),
          result: "lose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 2,
          time: new Date(),
          result: "win",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 2,
          time: new Date(),
          result: "draw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 2,
          time: new Date(),
          result: "lose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 3,
          time: new Date(),
          result: "win",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 3,
          time: new Date(),
          result: "draw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 3,
          time: new Date(),
          result: "lose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 4,
          time: new Date(),
          result: "win",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 4,
          time: new Date(),
          result: "draw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "usergamehistories",
      [
        {
          usergameId: 4,
          time: new Date(),
          result: "lose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usergamehistories", null, {});
  },
};
