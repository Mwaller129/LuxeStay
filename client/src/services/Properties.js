import Client from "./api"

export const GetRentals = async () => {
  try {
    const res = await Client.get("/rentals/all")
    return res.data
  } catch (error) {
    throw error
  }
}
