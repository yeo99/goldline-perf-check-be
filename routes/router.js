const express = require('express');
const router = express.Router();

// 노선/구간코드 controller
const { getAllRailwaySection } = require('../controllers/RailwaySection')
// 역 코드 controller
const { getAllRailwayStation } = require('../controllers/RailwayStation')

router.get('/railway/sections', getAllRailwaySection)
router.get('/railway/stations', getAllRailwayStation)

// 로그아웃
router.get('/logout', (req, res) => {
    req.logout();
    // 로그인 페이지로 리다이렉트 하는게 더 깔끔할 듯 싶다
    res.redirect('/')
})


module.exports = router