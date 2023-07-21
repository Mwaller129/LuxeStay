const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    // rentalName: {
    //   type: String,
    //   enum: [
    //     "Entertainer's Showplace",
    //     "W Atlanta Penthouse",
    //     "Atlantic Station Penthouse",
    //     "Peachtree St. Penthouse",
    //     "The Phoenix at Peachtree",
    //   ],
    // },
    rentalName: { type: String },
    name: { type: String, required: true },
    reviewDetails: { type: String },
  },
  { timestamps: true }
)

module.exports = reviewSchema
