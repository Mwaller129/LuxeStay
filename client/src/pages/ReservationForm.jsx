import { useState } from "react"
import { useNavigate } from "react-router-dom"

const reservation = () => {
  let navigate = useNavigate()
  const [reservationValues, setReservationValues] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    Message: "",
  })
  const handleChange = (e) => {
    setReservationValues({
      ...reservationValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setReservationValues({
      name: "",
      email: "",
      phone: "",
      Message: "",
    })
    navigate("rentals/all")
  }
  return (
    <div className="main-content">
      <div className="reservation form">
        <h1>Ready to Reserve your Luxury Penthouse?</h1>
        <p>
          Complete the form below, include the dates you would like to reserve
          the Luxury Penthouse.{" "}
        </p>
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Smith"
                value={reservationValues.name}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={reservationValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="Phone">Phone</label>
              <input
                onChange={handleChange}
                type="phone"
                name="phone"
                placeholder="Phone"
                value={reservationValues.phone}
                required
              />
            </div>
            <div>
              <label htmlFor="property">Property Name:</label>
              <select id="property">
                <option selected="select" disabled>
                  Select Luxury Penthouse
                </option>
                <option value="Entertainer's Showplace">
                  Entertainer's Showplace
                </option>
                <option value="W Atlanta Penthouse">W Atlanta Penthouse</option>
                <option value="Atlantic Station Penthouse">
                  Atlantic Station Penthouse
                </option>
                <option value="Peachtree St. Penthouse">
                  Peachtree St. Penthouse
                </option>
                <option value="The Phoenix at Peachtree">
                  The Phoenix at Peachtree
                </option>
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="Description">Description of Property</label>
              <input
                onChange={handleChange}
                type="description"
                name="description"
                placeholder="Description of Property"
                value={reservationValues.description}
                required
              />
            </div>
            <button
              disabled={
                !rentalValues.name ||
                (!rentalValues.email &&
                  rentalValues.phone &&
                  rentalValues.description)
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default reservation
