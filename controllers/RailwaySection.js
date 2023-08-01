const db = require("../models");
const RailwaySection = db.railway_section

// 검침 대상이 되는 구간 정보 read
const getAllRailwaySection = async (req, res) => {
    try {
        const railwaySections = await RailwaySection.findAll();
        res.status(200).json(railwaySections);
    } catch ( error ) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllRailwaySection,
}