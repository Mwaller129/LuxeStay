const { ComingSoon } = require("../models")

const GetComingSoon = async (req, res) => {
  try {
    const comingSoon = await ComingSoon.find({})
    res.send(comingSoon)
  } catch (error) {
    throw error
  }
}

const CreateComingSoon = async (req, res) => {
  try {
    const comingSoon = await ComingSoon.create({ ...req.body })
    res.send(comingSoon)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComingSoon,
  CreateComingSoon,
}
