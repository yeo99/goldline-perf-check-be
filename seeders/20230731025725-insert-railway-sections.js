'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   /**
    * in terminal,
    * sequelize db:seed:all
    */
    const sections = [
      { id: 7101001, section_name: '양촌역'},
      { id: 7101002, section_name: '양촌역-구래역'},
      { id: 7101003, section_name: '구래역-마산역'},
      { id: 7101004, section_name: '마산역-장기역'},
      { id: 7101005, section_name: '장기역-운양역'},
      { id: 7101006, section_name: '운양역-걸포북변역'},
      { id: 7101007, section_name: '걸포북변역-사우역'},
      { id: 7101008, section_name: '사우역-풍무역'},
      { id: 7101009, section_name: '풍무역-고촌역'},
      { id: 7101010, section_name: '고촌역-김포역'},
      { id: 7101011, section_name: '김포역'},
      { id: 7101012, section_name: '김포한강차량기지'},
    ]

    await queryInterface.bulkInsert('railway_sections', sections, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    /**
     * in terminal,
     * sequelize db:seed:undo:all
     */
    return queryInterface.bulkDelete('railway_sections', null, {});
  }
};
