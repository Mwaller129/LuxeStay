const router = require("express").Router()
const controller = require("../controllers/ReviewController")
const middleware = require("../middleware")

router.get("/:rental_id/reviews", controller.GetReviews)
router.post(
  "/:rental_id/reviews",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
router.put(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
router.delete(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = router
