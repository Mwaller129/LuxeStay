import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Reviews = ({ user }) => {
  const initialState = {
    rental: "",
    name: "",
    reviewDetails: "",
  }

  const [formState, setFormState] = useState(initialState)
  const [reviews, setReviews] = useState([])
  const [property, setProperty] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newReview = await axios.post(
      "http://localhost:3001/rentals/:id",
      formState
    )
    console.log(newReview)
    let reviewList = [...reviews]
    reviewList.push(newReview.data)
    setReviews(reviewList)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="main-content">
      <div className="addreview col">
        <h1>Tell Us About Your Stay!</h1>
        <div className="card-overlay centered">
          <form className="addreview col" onSubmit={handleSubmit}>
            <p>
              Complete the form below to let us know about your experience at
              <div>
                <select id="property">
                  <option selected="select" disabled>
                    Select Luxury Penthouse
                  </option>
                  <option value="Entertainer's Showplace">
                    Entertainer's Showplace
                  </option>
                  <option value="W Atlanta Penthouse">
                    W Atlanta Penthouse
                  </option>
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
            </p>

            <div className="input-wrapper">
              <div className="reviews">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={formState.name}
                />
                <label htmlFor="reviewDetails">Review: </label>
                <input
                  type="text"
                  id="reviewDetails"
                  onChange={handleChange}
                  value={formState.reviewDetails}
                ></input>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}
export default Reviews
