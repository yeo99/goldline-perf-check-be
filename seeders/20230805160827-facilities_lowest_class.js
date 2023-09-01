'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const facilitiesLowestClass = [
      // 교류변전기기(D120)
      { id: 'D121', facility_code: '특고압진공차단기', upper_category: 'D120' },
      { id: 'D122', facility_code: '특고압가스차단기', upper_category: 'D120' },
      { id: 'D123', facility_code: '특고압변압기', upper_category: 'D120' },
      { id: 'D124', facility_code: '특고압배전반', upper_category: 'D120' },

      // 직류변전기기(D130)
      { id: 'D131', facility_code: '단로기', upper_category: 'D130' },
      { id: 'D132', facility_code: '정류기용변압기', upper_category: 'D130' },
      { id: 'D133', facility_code: '정류기', upper_category: 'D130' },

      // 제어설비(D140)
      { id: 'D141', facility_code: '고속차단기', upper_category: 'D140' },

      // 배전선로(D210)
      { id: 'D211', facility_code: '특고압케이블', upper_category: 'D210' },
      { id: 'D212', facility_code: '고압케이블', upper_category: 'D210' },

      // 전력기기(D220)
      { id: 'D221', facility_code: '고압배전반', upper_category: 'D220' },
      { id: 'D222', facility_code: '고압변압기', upper_category: 'D220' },
      { id: 'D223', facility_code: '고압차단기', upper_category: 'D220' },
      { id: 'D224', facility_code: '저압배전반', upper_category: 'D220' },
      { id: 'D225', facility_code: 'RTU', upper_category: 'D220' },

      // 제어설비(D230)
      { id: 'D231', facility_code: 'SCADA(주서버)', upper_category: 'D230' },
      { id: 'D232', facility_code: 'SCADA(FEP)', upper_category: 'D230' },
      { id: 'D233', facility_code: 'SCADA(Network)', upper_category: 'D230' },
      { id: 'D234', facility_code: 'SCADA(Console)', upper_category: 'D230' },

      // 조명타워(D240)
      { id: 'D241', facility_code: '조명타워', upper_category: 'D240' },

      // 차축검지장치(E110)
      { id: 'E111', facility_code: '차축검지센터', upper_category: 'E110' },

      // 연동장치(E210)
      { id: 'E211', facility_code: '전자연동장치', upper_category: 'E210' },
      { id: 'E212', facility_code: '연동논리부 모듈', upper_category: 'E210' },
      { id: 'E213', facility_code: '광통신부 모듈', upper_category: 'E210' },

      // 열차집중제어장치(E220)
      { id: 'E221', facility_code: '관제설비(TCC 서버)', upper_category: 'E220' },
      { id: 'E222', facility_code: '과제설비(MSC 서버)', upper_category: 'E220' },
      
      // 신호기장치(E230)
      { id: 'E231', facility_code: '신호기구', upper_category: 'E230' },
      { id: 'E232', facility_code: '진로표시기', upper_category: 'E230' },

      // 선로전환기(E310)
      { id: 'E311', facility_code: '선로전환기', upper_category: 'E310' },

      // 열차보호 안전설비(E410)
      { id: 'E411', facility_code: '분기기 융설장치', upper_category: 'E410' },

      // { id: '', facility_code: '', upper_category: '' },
      // 광케이블(F110)
      { id: 'F111', facility_code: '광케이블', upper_category: 'F110' },
      // 동케이블(F120)
      { id: 'F121', facility_code: '누설동축케이블', upper_category: 'F120' },

      // 광다중화설비(F210)
      { id: 'F211', facility_code: 'MPLS', upper_category: 'F210' },
      { id: 'F212', facility_code: '정류기', upper_category: 'F210' },

      // LTE-R(F310)
      { id: 'F311', facility_code: '중앙제어설비', upper_category: 'F310' },
      { id: 'F312', facility_code: '관제조작반', upper_category: 'F310' },

      // LTE-기지국 설비(F320)
      { id: 'F321', facility_code: 'DU', upper_category: 'F320' },
      { id: 'F322', facility_code: 'RRU', upper_category: 'F320' },
      { id: 'F323', facility_code: '안테나', upper_category: 'F320' },

      // 행성안내설비(F510)
      { id: 'F511', facility_code: '중앙제어설비(관제)', upper_category: 'F510' },
      { id: 'F512', facility_code: '역서버', upper_category: 'F510' },
      { id: 'F513', facility_code: '행성안내게시기', upper_category: 'F510' },

      // 구내방송설비(F520)
      { id: 'F521', facility_code: '자동안내방송주장치', upper_category: 'F520' },
      { id: 'F522', facility_code: '자동안내방송 역장치', upper_category: 'F520' },

      // 영상감시 설비(F610)
      { id: 'F611', facility_code: '영상주체어서버', upper_category: 'F610' },
      { id: 'F612', facility_code: '영상저장서버', upper_category: 'F610' },
      { id: 'F613', facility_code: '영상운영장치', upper_category: 'F610' },
      { id: 'F614', facility_code: '영상표출장치', upper_category: 'F610' },
      { id: 'F615', facility_code: '카메라', upper_category: 'F610' },

      // 전산장치(F710)
      { id: 'F711', facility_code: '중앙전산기', upper_category: 'F710' },
      { id: 'F712', facility_code: '역단위전산기', upper_category: 'F710' },

      // 발매기(F720)
      { id: 'F721', facility_code: '1회권발매기', upper_category: 'F720' },
      { id: 'F722', facility_code: '교통카드투입/정산충전기', upper_category: 'F720' },
      { id: 'F723', facility_code: '보증금환급기', upper_category: 'F720' },

      // 게이트(F730)
      { id: 'F731', facility_code: '자동개/집표기(일반)', upper_category: 'F730' },
      { id: 'F732', facility_code: '자동개/집표기(장애)', upper_category: 'F730' },
    ]

    await queryInterface.bulkInsert('facilities_lowest_class', facilitiesLowestClass, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('facilities_lowest_class', null, {})
  }
};