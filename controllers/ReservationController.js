const { Reservation } = require("../models")

const GetReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({})
    res.send(reservations)
  } catch (error) {
    throw error
  }
}
const GetReservation = async (req, res) => {
  try {
    const reservations = await Reservation.findById(req.params.id)
    res.send(reservations)
  } catch (error) {
    throw error
  }
}

const CreateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create({ ...req.body })
    res.send(reservation)
  } catch (error) {
    throw error
  }
}

const UpdateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.reservation_id,
      req.body,
      { new: true }
    )
    res.send(reservation)
  } catch (error) {
    throw error
  }
}

const DeleteReservation = async (req, res) => {
  try {
    await Reservation.deleteOne({ _id: req.params.reservation_id })
    res.send({
      msg: "Reservation Deleted",
      payload: req.params.reservation_id,
      status: "Ok",
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetReservations,
  GetReservation,
  CreateReservation,
  UpdateReservation,
  DeleteReservation,
}
