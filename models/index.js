const mongoose = require("mongoose")
const userSchema = require("./User")
const rentalSchema = require("./Rental")
const reviewSchema = require("./Review")

const User = mongoose.model("User", userSchema)
const Rental = mongoose.model("Rental", rentalSchema)
const Review = mongoose.model("Review", reviewSchema)

module.exports = {
  User,
  Rental,
  Review,
}
