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


// 로그아웃
router.get('/logout', (req, res) => {
    req.logout();
    // 로그인 페이지로 리다이렉트 하는게 더 깔끔할 듯 싶다
    res.redirect('/')
})


module.exports = router