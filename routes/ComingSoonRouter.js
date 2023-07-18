const router = require("express").Router()
const controller = require("../controllers/ComingSoonController")
const middleware = require("../middleware")

router.get("/", controller.GetComingSoon)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComingSoon
)
module.exports = router
