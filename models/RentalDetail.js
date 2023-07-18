const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rentalDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
)

module.exports = rentalDetailSchema
