import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const addRental = () => {
  let navigate = useNavigate()
  const [rentalValues, setRentalValues] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  })
  const handleChange = (e) => {
    setRentalValues({ ...rentalValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({
      name: "",
      email: "",
      phone: "",
      description: "",
    })
    navigate("rentals/all")
  }
  return (
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
  )
}

export default addRental
