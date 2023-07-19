const router = require("express").Router()
const controller = require("../controllers/RentalController")
const middleware = require("../middleware")

router.get("/", controller.GetRentals)
router.get("/:id", controller.GetRental)
router.post(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRental
)
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRental
)
router.delete(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteRental
)

module.exports = router
