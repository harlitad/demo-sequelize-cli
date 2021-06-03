'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [
      "thriller",
      "romance",
      "science fiction",
      "horror",
      "family",
    ];
    const seed = categories.map((category) => {
      return {
        category,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("categories", seed)
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
