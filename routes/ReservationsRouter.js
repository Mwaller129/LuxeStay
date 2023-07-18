const router = require("express").Router()
const controller = require("../controllers/ReservationController")
const middleware = require("../middleware")

router.get("/:id", controller.GetReservation)
router.get("/", controller.GetReservation)
router.post(
  "/:id",
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
