const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    rental: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rental" }],
    name: { type: String, required: true },
    reviewDetails: { type: String },
  },
  { timestamps: true }
)

module.exports = reviewSchema
