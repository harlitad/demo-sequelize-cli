'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seed = [...Array(20)].map((cast) => {
      return {
        movie_id: Math.round(Math.random() * 4) + 1,
        cast_id: Math.round(Math.random() * 14) + 1,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("movie_casts", seed, {});
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
