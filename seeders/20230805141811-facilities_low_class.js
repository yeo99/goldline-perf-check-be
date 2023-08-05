'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const facilitiesLowClass = [
      // 송변전설비(D100)
      { id: 'D110', facility_code: '지중손전선로', upper_category: 'D100' },
      { id: 'D120', facility_code: '교류변전기기', upper_category: 'D100' },
      { id: 'D130', facility_code: '직류변전기기', upper_category: 'D100' },
      { id: 'D140', facility_code: '제어설비', upper_category: 'D100' },

      // 전력설비(D200)
      { id: 'D210', facility_code: '배전선로', upper_category: 'D200' },
      { id: 'D220', facility_code: '전력기기', upper_category: 'D200' },
      { id: 'D230', facility_code: '제어설비', upper_category: 'D200' },
      { id: 'D240', facility_code: '조명타워', upper_category: 'D200' },

      // 열차검지장치(E100)
      { id: 'E110', facility_code: '차축검지장치', upper_category: 'E100' },
      { id: 'E120', facility_code: '전기소방설비', upper_category: 'E100' },

      // 열차제어장치(E200)
      { id: 'E210', facility_code: '연동장치', upper_category: 'E200' },
      { id: 'E220', facility_code: '열차집중제어장치', upper_category: 'E200' },
      { id: 'E230', facility_code: '신호기장치', upper_category: 'E200' },
      
      // 선로전환장치(E300)
      { id: 'E310', facility_code: '선로전환기', upper_category: 'E300' },

      // 안전설비(E400)
      { id: 'E410', facility_code: '열차보호 안전설비', upper_category: 'E400' },
    ]

    await queryInterface.bulkInsert('facilities_low_class', facilitiesLowClass, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('facilities_low_class', null, {})
  }
};
