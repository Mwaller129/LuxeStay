import { useState, useParams } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Client from "../services/api.js"
const updatedReview = ({ user }) => {
  const [updatedReview, setUpdatedReview] = useState({
    rentalName: "",
    name: "",
    reviewDetails: "",
  })

  let navigate = useNavigate()

  const handleRentalNameChange = (event) => {
    setUpdatedReview({
      ...updatedReview,
      rentalName: event.target.value,
    })
  }

  const handleNameChange = (event) => {
    setUpdatedReview({
      ...updatedReview,
      name: event.target.value,
    })
  }

  const handleReviewChange = (event) => {
    setUpdatedReview({
      ...updatedReview,
      reviewDetails: event.target.value,
    })
  }

  return user ? (
    <>
      <div className="main-content">
        <div className="card-overlay centered">
          <form className="addreview col">
            <p>Complete the form below to add an update to your review.</p>

            <label htmlFor="rentalName">Rental Name: </label>
            <input
              type="text"
              id="rentalName"
              placeholder="Rental Name"
              onChange={handleRentalNameChange}
            ></input>
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              id="Name"
              placeholder="Your Name"
              onChange={handleNameChange}
            ></input>
            <label htmlFor="reviewDetails">Review: </label>
            <input
              type="text"
              id="reviewDetails"
              placeholder="How was your stay?"
              onChange={handleReviewChange}
            ></input>
            <button className="submitreview-btn" type="submit">
              Submit
            </button>
          </form>
          <p>
            {updatedReview.rentalName} {updatedReview.name}{" "}
            {updatedReview.reviewDetails}
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}
export default updatedReview
