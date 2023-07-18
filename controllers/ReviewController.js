const { Review, Rental } = require("../models")

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}
const GetReview = async (req, res) => {
  try {
    const reviews = await Review.findById(req.params.id)
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body })
    res.send(review)
    // const rentalReview = await Review.findById(req.params.review_id)
    // rentalReview.review.push(reviews)
    // rentalReview.save()
    // res.send(rentalReview)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.review_id,
      req.body,
      { new: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.review_id })
    res.send({
      msg: "Review Deleted",
      payload: req.params.review_id,
      status: "Ok",
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  GetReview,
  CreateReview,
  UpdateReview,
  DeleteReview,
}
