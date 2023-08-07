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


router.get('/railway/sections', getAllRailwaySection)
router.get('/railway/stations', getAllRailwayStation)

router.get('/facilities/high-class/', getAllFacilitiesHighClass)
router.get('/facilities/middle-class/:upper_category', getFacilitiesMiddleClass)

module.exports = router