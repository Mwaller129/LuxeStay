const router = require("express").Router()
const controller = require("../controllers/RentalController")
const middleware = require("../middleware")

router.get("/all", controller.GetRentals)
router.post(
  "/addrental",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRental
)
router.put(
  "/all/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRental
)
router.delete(
  "/all/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteRental
)

module.exports = router
