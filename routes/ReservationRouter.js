const router = require("express").Router()
const controller = require("../controllers/ReservationController")
const middleware = require("../middleware")

router.get("/:rental_id", controller.GetReservations)
router.get("/", controller.GetReservation)
router.post(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReservation
)
router.put(
  "/:reservation_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReservation
)
router.delete(
  "/:reservation_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReservation
)

module.exports = router
