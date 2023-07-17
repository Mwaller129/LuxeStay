const addRental = () => {
  letNavigate = useNavigate()
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
    navigate("/rentals")
  }
  return (
    <div className="addrental col">
      <div className="card-overlay centered">
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
              value={rentalValues.phone}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Description">Description of Property</label>
            <input
              onChange={handleChange}
              type="description"
              name="cdescription"
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
  )
}

export default addRental
