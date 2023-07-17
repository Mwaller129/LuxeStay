import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GetRentals } from "../services/Properties"
import axios from "axios"
import Reviews from "./Reviews"

const rentalDetails = (user) => {
  let navigate = useNavigate()
  const [property, setProperties] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const showProperties = async () => {
      const data = await GetRentals()
      setProperties(data)
    }
    showProperties()
  }, [])

  const getReviews = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/reviews/${id}/reviews`)
      console.log(res)
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getReviews()
  }, [])

  return user ? (
    <div className="rental">
      <div className="rental-header">
        <img src={property.image} alt={property.name} />
        <div className="rental-name">
          <h1>{property.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className="rental-header">
          <h3>Price: {property.price}</h3>
          <h3>Bedrooms/Bathrooms: {property.size}</h3>
        </div>
        <p>{property.description}</p>
        <div className="reviews">
          <Reviews reviews={reviews} setReviews={setReviews} />
          <h3>Reviews:</h3>
          {reviews?.map((review) => (
            <div key={review._id}>
              <p>Name: {review.name} </p>
              <p>Review: {review.reviewDetails}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/rentals/all">Back</Link>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}

export default rentalDetails
