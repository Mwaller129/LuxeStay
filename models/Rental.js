const { Schema } = require("mongoose")

const rentalSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
)

module.exports = rentalSchema
