const express = require('express');
const router = express.Router();

// 노선/구간코드 controller
const { getAllRailwaySection } = require('../controllers/RailwaySection')
// 역 코드 controller
const { getAllRailwayStation } = require('../controllers/RailwayStation')

router.get('/railway/sections', getAllRailwaySection)
router.get('/railway/stations', getAllRailwayStation)

module.exports = router