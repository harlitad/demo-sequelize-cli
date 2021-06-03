"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const casts = [
      "budi",
      "sarah",
      "jo in sung",
      "anne hatheway",
      "ryan gosling",
      "emma watson",
      "emma stone",
      "harry potter",
      "robert pattinson",
      "inggit garnasih",
      "camelia",
      "thomas edison",
      "ariana grande",
      "lady antebellum",
    ];
    const seed = casts.map((cast) => {
      return {
        name: cast,
        description: null,
        birth_date: null,
        died_date: null,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("casts", seed);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('casts', null, {});
  },
};
