'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const facilitiesMiddleClass = [
      // 구조물
      { id: 'A100', facility_code: '교량', upper_category: 'A000' },
      { id: 'A200', facility_code: '터널', upper_category: 'A000' },
      { id: 'A300', facility_code: '옹벽', upper_category: 'A000' },
      { id: 'A400', facility_code: '비탈면', upper_category: 'A000' },
      { id: 'A500', facility_code: '승강장', upper_category: 'A000' },

      // 궤도시설
      { id: 'B100', facility_code: '도상', upper_category: 'B000' },
      { id: 'B200', facility_code: '레일', upper_category: 'B000' },
      { id: 'B300', facility_code: '분기기', upper_category: 'B000' },
      { id: 'B400', facility_code: '침목', upper_category: 'B000' },

      // 건축물
      { id: 'C100', facility_code: '역사건축물', upper_category: 'C000' },
      { id: 'C200', facility_code: '역사외건축물', upper_category: 'C000' },
      { id: 'C300', facility_code: '기계 및 부대설비', upper_category: 'C000' },
      { id: 'C400', facility_code: '소방설비', upper_category: 'C000' },
      { id: 'C500', facility_code: '냉난방 및 환기설비', upper_category: 'C000' },
      { id: 'C600', facility_code: '승강설비', upper_category: 'C000' },
      { id: 'C700', facility_code: '승강장 안전문', upper_category: 'C000' },

      // 전철전력설비
      { id: 'D100', facility_code: '송변전설비', upper_category: 'D000' },
      { id: 'D200', facility_code: '전력설비', upper_category: 'D000' },

      // 신호제어설비
      { id: 'E100', facility_code: '열차검지장치', upper_category: 'E000' },
      { id: 'E200', facility_code: '열차제어장치', upper_category: 'E000' },
      { id: 'E300', facility_code: '선로전환장치', upper_category: 'E000' },
      { id: 'E400', facility_code: '안전설비', upper_category: 'E000' },
    ]

    await queryInterface.bulkInsert('facilities_middle_class', facilitiesMiddleClass, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('facilities_middle_class', null, {})
  }
};