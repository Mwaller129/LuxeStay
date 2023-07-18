import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Reviews = ({ reviews, setReviews }) => {
  const initialState = {
    name: "",
    reviewDetails: "",
  }

  const [formState, setFormState] = useState(initialState)
  const [property, setProperties] = useState([])

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

  return (
    <div className="main-content">
      <div className="addreview col">
        <h1>Tell Us About Your Stay!</h1>

        <div className="card-overlay centered">
          <p>
            Complete the form below to let us know about your experience at
            <Link to={`${property.name}`}></Link>.
          </p>
          <form className="addreview col" onSubmit={handleSubmit}>
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
  )
}
export default Reviews
