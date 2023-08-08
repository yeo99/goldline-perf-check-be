const db = require("../models")
const FacilitiesLowestClass = db.facilities_lowest_class

// 세분류 코드 검색
const getFacilitiesLowestClass = async (req, res) => {
    try {
        const facilitiesLowestClass = await FacilitiesLowestClass.findAll({
            where: {
                upper_category: req.params.upper_category
            }
        })
        res.status(200).json(facilitiesLowestClass)
    } catch ( error ) {
        res.status(500).json({ error : error.message })
    }
}

module.exports = {
    getFacilitiesLowestClass
}