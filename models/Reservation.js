const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reservationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = reservationSchema
