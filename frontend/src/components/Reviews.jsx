import { useState } from "react"
import axios from "axios"

const Reviews = ({ getReviews }) => {
  const initialState = {
    name: "",
    review: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:3001/rentals/:id", formState)
    setFormState(initialState)
    props.getReviews()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    // <div><h3>Reviews:</h3></div>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="review">Review: </label>
        <textarea
          id="review"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.review}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Reviews
