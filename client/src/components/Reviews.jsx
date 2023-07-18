import { useState } from "react"
import axios from "axios"

const Reviews = ({ reviews, setReviews }) => {
  const initialState = {
    name: "",
    reviewDetails: "",
  }

  const [formState, setFormState] = useState(initialState)

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
        <p>
          Complete the form below to let us know about your experience at this
          property.{" "}
        </p>
        <div className="card-overlay centered">
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
