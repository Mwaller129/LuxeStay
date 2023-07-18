const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rentalSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    size: { type: String },
    price: { type: Number },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
)

module.exports = rentalSchema
