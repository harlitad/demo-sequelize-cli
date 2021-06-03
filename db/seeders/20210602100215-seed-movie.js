'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const movies = [
      "pelangi",
      "testing",
      "iya tidak",
      "cobalah kau mengerti",
      "iya aku ngerti",
    ];
    const seed = movies.map((movie) => {
      return {
        title: movie,
        description: null,
        category_id: Math.round(Math.random() * 4) + 1,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("movies", seed, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
