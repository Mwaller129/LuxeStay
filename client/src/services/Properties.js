import Client from "./api"

export const GetProperties = async () => {
  try {
    const res = await Client.get("/rentals/all")
    return res.data
  } catch (error) {
    throw error
  }
}
