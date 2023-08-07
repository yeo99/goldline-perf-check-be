const db = require("../models")
const FacilitiesLowClass = db.facilities_low_class

// 소분류 코드 검색
const getFacilitiesLowClass = async (req, res) => {
    try {
        const facilitiesLowClass = await FacilitiesLowClass.findAll({
            where: {
                upper_category: req.params.upper_category
            }
        })
        res.status(200).json(facilitiesLowClass)
    } catch ( error ) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getFacilitiesLowClass
}