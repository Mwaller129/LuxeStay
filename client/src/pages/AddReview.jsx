import { useState, useParams } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Client from "../services/api.js"
const addReview = ({ user }) => {
  const initialState = {
    rentalName: "",
    name: "",
    reviewDetails: "",
  }
  const { id } = { useParams }

  const [formState, setFormState] = useState(initialState)
  const [reviews, setReviews] = useState([])

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newReview = await Client.post(`/reviews/${id}`, formState)
    console.log(newReview)
    let reviewList = [...reviews]
    reviewList.push(newReview.data)
    setReviews(reviewList)
    setFormState(initialState)
    navigate(`/reviews/${id}`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="main-content">
      <div className="card-overlay centered">
        <form className="addreview col" onSubmit={handleSubmit}>
          <h1>Tell Us About Your Stay!</h1>
          <p>
            Complete the form below to let us know about your experience at
            {/* <div>
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
            </div> */}
          </p>

          <div className="input-wrapper">
            <div className="reviews">
              <label htmlFor="rentalName">Property Name:</label>
              <input
                type="text"
                id="rentalName"
                placeholder="Property Name"
                onChange={handleChange}
                value={formState.rentalName}
              />

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formState.name}
              />
              <label htmlFor="reviewDetails">Review: </label>
              <input
                type="text"
                id="reviewDetails"
                placeholder="How was your stay?"
                onChange={handleChange}
                value={formState.reviewDetails}
              ></input>
              <button className="submitreview-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
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
export default addReview
