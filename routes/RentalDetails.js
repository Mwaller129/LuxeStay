const router = require("express").Router()
const controller = require("../controllers/RentalDetailsController")
const middleware = require("../middleware")

router.get("/:rental_id", controller.GetRentalDetails)

module.exports = router
