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
    // <div><h3>Reviews:</h3></div>
    <div className="reviews">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="reviewDetails">Review: </label>
        <textarea
          id="reviewDetails"
          onChange={handleChange}
          value={formState.reviewDetails}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Reviews
