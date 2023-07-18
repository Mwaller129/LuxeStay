import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetRental, GetReviews } from "../services/Properties"
import axios from "axios"
import Rentals from "./Rentals"

const Reviews = ({ props }) => {
  //   let navigate = useNavigate()

  const [review, setReview] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const showReview = async () => {
      const data = await GetReviews(id)
      setReview(data)
    }
    showReview()
  }, [])
  console.log(review)

  return review ? (
    <div className="main-content">
      <div className="card-overlay centered">
        <div className="rental-grid">
          <h1>Reviews</h1>
          {review.map((review) => (
            <div className="rental-card" key={review._id}>
              <h3>{review.rental}</h3>
              <h3>{review.name}</h3>
              <h3>{review.reviewDetails}</h3>
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
