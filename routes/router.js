const express = require('express');
const router = express.Router();

// 노선/구간코드 controller
const { getAllRailwaySection } = require('../controllers/RailwaySection')

router.get('/railway/sections', getAllRailwaySection)

module.exports = router