const db = require("../models")
const FacilitiesMiddleClass = db.facilities_middle_class

// 중분류 코드 검색
const getFacilitiesMiddleClass = async (req, res) => {
    try {
        const facilitiesMiddleClass = await FacilitiesMiddleClass.findAll({
            where: {
                upper_category: req.params.upper_category
            }
        })
        res.status(200).json(facilitiesMiddleClass)
    } catch ( error ) {
        res.status(500).json({ error : error.message })
    }
}

module.exports = {
    getFacilitiesMiddleClass
}