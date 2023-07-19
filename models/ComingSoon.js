const mongoose = require("mongoose")
const Schema = mongoose.Schema

const comingSoonSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    availability: { type: String },
  },
  { timestamps: true }
)

module.exports = comingSoonSchema
