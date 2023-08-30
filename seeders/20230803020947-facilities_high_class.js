'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const facilitiesHighClass = [
      { id: 'A000', facility_code: '구조물' },
      { id: 'B000', facility_code: '궤도시설' },
      { id: 'C000', facility_code: '건축물' },
      { id: 'D000', facility_code: '전철전력설비' },
      { id: 'E000', facility_code: '신호제어설비' },
      { id: 'F000', facility_code: '정보통신설비' }
    ]

    await queryInterface.bulkInsert('facilities_high_class', facilitiesHighClass, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('facilities_high_class', null, {})
  }
};
