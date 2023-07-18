const mongoose = require("mongoose")
const userSchema = require("./User")
const rentalSchema = require("./Rental")
const reviewSchema = require("./Review")
const reservationSchema = require("./Reservation")
const comingSoonSchema = require("./ComingSoon")

const User = mongoose.model("User", userSchema)
const Rental = mongoose.model("Rental", rentalSchema)
const Review = mongoose.model("Review", reviewSchema)
const Reservation = mongoose.model("Reservation", reservationSchema)
const ComingSoon = mongoose.model("ComingSoon", comingSoonSchema)

module.exports = {
  User,
  Rental,
  Review,
  Reservation,
  ComingSoon,
}
