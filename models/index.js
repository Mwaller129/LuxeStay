const mongoose = require("mongoose")
const userSchema = require("./User")
const rentalSchema = require("./Rental")

const User = mongoose.model("User", userSchema)
const Rental = mongoose.model("Rental", rentalSchema)

module.exports = {
  User,
  Rental,
}
