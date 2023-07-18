import Client from "./api"

export const GetRentals = async () => {
  try {
    const res = await Client.get("/rentals")
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetRental = async (id) => {
  try {
    const res = await Client.get(`/rentals/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetReviews = async (id) => {
  try {
    const res = await Client.get(`/reviews/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetReview = async (id) => {
  try {
    const res = await Client.get(`/reviews/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetComingSoon = async () => {
  try {
    const res = await Client.get("/comingsoon")
    return res.data
  } catch (error) {
    throw error
  }
}
