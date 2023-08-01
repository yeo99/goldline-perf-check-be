const db = require("../models");
const RailwayStation = db.railway_station;

// 검친 대상이 되는 역 정보 read
const getAllRailwayStation = async (req, res) => {
    try {
        const railwayStations = await RailwayStation.findAll();
        res.status(200).json(railwayStations)
    } catch ( error ) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllRailwayStation,
}