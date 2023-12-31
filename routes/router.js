const express = require('express');
const router = express.Router();

// 노선/구간코드 controller
const { getAllRailwaySection } = require('../controllers/RailwaySection')
// 역 코드 controller
const { getAllRailwayStation } = require('../controllers/RailwayStation')
// 대분류 read controller
const { getAllFacilitiesHighClass } = require('../controllers/FacilitiesHighClass')
// 중분류 검색 controller
const { getFacilitiesMiddleClass } = require('../controllers/FacilitiesMiddleClass')
// 소분류 검색 controller
const { getFacilitiesLowClass } = require('../controllers/FacilitiesLowClass')
// 세분류 검색 controller
const { getFacilitiesLowestClass } = require('../controllers/FacilitiesLowestClass')
// 회원 controller
const { addUser, userLogin, userLogout } = require('../controllers/Users')

// 노선(A역-B역)
router.get('/railway/sections', getAllRailwaySection)
// 역
router.get('/railway/stations', getAllRailwayStation)
// 대분류 시설 코드
router.get('/facilities/high-class/', getAllFacilitiesHighClass)
// 중분류 시설 코드
router.get('/facilities/middle-class/:upper_category', getFacilitiesMiddleClass)
// 소분류 시설 코드
router.get('/facilities/low-class/:upper_category', getFacilitiesLowClass)
// 세분류 시설 코드
router.get('/facilities/lowest-class/:upper_category', getFacilitiesLowestClass)
// 회원가입
router.post('/register', addUser)
// 로그인
router.post('/login', userLogin)
// 로그아웃
router.get('/logout', userLogout)

// 로그인 상태 확인 middleware
const requireAuth = require('../middleware/auth')
router.get('/auth/check', requireAuth, (req, res) => {
    res.json({ isAuthenticated: true });
})



// 마이페이지 임시
// router.get('/profile', (req, res) => {
//     if (req.user) {
//         res.send('이미 로그인 되어있습니다.');
//     } else {
//         res.send('로그인 후 이용해주세요.');
//     }
// })


module.exports = router