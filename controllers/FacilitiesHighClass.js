const db = require("../models")
const FacilitiesHighClass = db.facilities_high_class

// 대분류 코드 read
const getAllFacilitiesHighClass = async (req, res) => {
    try {
        const facilitiesHighClass = await FacilitiesHighClass.findAll();
        res.status(200).json(facilitiesHighClass);
    } catch ( error ) {
        res.status(500).json({ error : error.message });
    }
}

module.exports = {
    getAllFacilitiesHighClass
}