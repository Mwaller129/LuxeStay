const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    reviewDetails: { type: String },
  },
  { timestamps: true }
)

module.exports = reviewSchema
