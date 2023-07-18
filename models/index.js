const mongoose = require("mongoose")
const userSchema = require("./User")
const rentalSchema = require("./Rental")
const reviewSchema = require("./Review")
const rentalDetailSchema = require("./RentalDetail")

const User = mongoose.model("User", userSchema)
const Rental = mongoose.model("Rental", rentalSchema)
const Review = mongoose.model("Review", reviewSchema)
const RentalDetail = mongoose.model("RentalDetail", rentalDetailSchema)

module.exports = {
  User,
  Rental,
  Review,
  RentalDetail,
}
