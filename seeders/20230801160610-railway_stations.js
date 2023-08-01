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
    const stations = [
      { id: 4110, station_name: '양촌역' },
      { id: 4111, station_name: '구래역' },
      { id: 4112, station_name: '마산역' },
      { id: 4113, station_name: '장기역' },
      { id: 4114, station_name: '운양역' },
      { id: 4115, station_name: '걸포역' },
      { id: 4116, station_name: '사우역' },
      { id: 4117, station_name: '풍무역' },
      { id: 4118, station_name: '고촌역' },
      { id: 4119, station_name: '김포역' },
      { id: 4120, station_name: '차량기지' },
    ]

    await queryInterface.bulkInsert('railway_stations', stations, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('railway_stations', null, {})
  }
};
