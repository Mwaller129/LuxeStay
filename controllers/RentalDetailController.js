const { RentalDetail } = require("../models")

const GetRentalDetails = async (req, res) => {
  try {
    const rentalDetails = await RentalDetail.find({})
    res.send(rentalDetails)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRentalDetails,
}
