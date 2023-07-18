const { Rental } = require("../models")

const GetRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({})
    res.send(rentals)
  } catch (error) {
    throw error
  }
}
const GetRental = async (req, res) => {
  try {
    const rentals = await Rental.findById(req.params.id)
    res.send(rentals)
  } catch (error) {
    throw error
  }
}

const CreateRental = async (req, res) => {
  try {
    const rental = await Rental.create({ ...req.body })
    res.send(rental)
  } catch (error) {
    throw error
  }
}

const UpdateRental = async (req, res) => {
  try {
    const rental = await Rental.findByIdAndUpdate(
      req.params.rental_id,
      req.body,
      { new: true }
    )
    res.send(rental)
  } catch (error) {
    throw error
  }
}

const DeleteRental = async (req, res) => {
  try {
    await Rental.deleteOne({ _id: req.params.rental_id })
    res.send({
      msg: "Rental Deleted",
      payload: req.params.rental_id,
      status: "Ok",
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRentals,
  GetRental,
  CreateRental,
  UpdateRental,
  DeleteRental,
}
