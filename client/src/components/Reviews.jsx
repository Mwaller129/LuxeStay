import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetRental, GetReviews } from "../services/Properties"
import axios from "axios"
import Rentals from "./Rentals"

const Reviews = ({ props }) => {
  //   let navigate = useNavigate()

  const [reviews, setReviews] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const showReview = async () => {
      const data = await GetReviews(id)
      setReviews(data)
    }
    showReview()
  }, [])
  console.log(reviews)

  const removeReview = (id) => {
    let reviewList = [...reviews]
    reviewList.splice(id, 1)
    setReviews(reviewList)
  }

  return reviews ? (
    <div className="main-content">
      <div className="card-overlay centered">
        <div className="rental-grid">
          <h1>Reviews</h1>
          {reviews.map((review) => (
            <div className="rental-card" key={review._id}>
              <h3>{review.rental}</h3>
              <h3>{review.name}</h3>
              <h3>{review.reviewDetails}</h3>

              <button
                className="block-button"
                onClick={() => removeReview(review._id)}
              >
                {" "}
                Block{" "}
              </button>
            </div>
          ))}
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
