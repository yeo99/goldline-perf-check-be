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

      // 선로설비(F100)
      { id: 'F110', facility_code: '광케이블', upper_category: 'F100' },
      { id: 'F120', facility_code: '동케이블', upper_category: 'F100' },

      // 전송설비(F200)
      { id: 'F210', facility_code: '광다중화설비', upper_category: 'F200' },

      // 무선설비(F300)
      { id: 'F310', facility_code: 'LTE-R', upper_category: 'F300' },
      { id: 'F320', facility_code: 'LTE-기지국 설비', upper_category: 'F300' },

      // 전화교환설비(F400)
      { id: 'F410', facility_code: '통합교환설비', upper_category: 'F400' },

      // 역무통신설비(F500)
      { id: 'F510', facility_code: '행성안내설비', upper_category: 'F500' },
      { id: 'F520', facility_code: '구내방송설비', upper_category: 'F500' },

      // 영상설비(F600)
      { id: 'F610', facility_code: '영상감시 설비', upper_category: 'F600' },

      // 역무자동설비(F700)
      { id: 'F710', facility_code: '전산장치', upper_category: 'F700' },
      { id: 'F720', facility_code: '발매기', upper_category: 'F700' },
      { id: 'F730', facility_code: '게이트', upper_category: 'F700' },
    ]

    await queryInterface.bulkInsert('facilities_low_class', facilitiesLowClass, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('facilities_low_class', null, {})
  }
};
