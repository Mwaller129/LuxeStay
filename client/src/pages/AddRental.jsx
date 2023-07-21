import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const addRental = ({ user }) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    description: "",
  }
  const [rentalValues, setRentalValues] = useState({ initialState })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setRentalValues({ ...rentalValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newRental = await Client.post("/addrental", formState)
    console.log(newRental)
    setRentalValues(initialState)
    navigate("/rentals")
  }

  return user ? (
    <div className="main-content">
      <div className="addrental col">
        <div className="card-overlay centered">
          <h1>Ready to Rent your Luxury Penthouse?</h1>
          <h3>
            Complete the form below to let us know more about your property.
          </h3>
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Smith"
                value={rentalValues.name}
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
                value={rentalValues.email}
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
                value={rentalValues.phone}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="Description">Description of Property</label>
              <input
                onChange={handleChange}
                type="description"
                name="description"
                placeholder="Description of Property"
                value={rentalValues.description}
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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}

export default addRental
