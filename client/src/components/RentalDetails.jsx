import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GetRentals } from "../services/Properties"
import axios from "axios"
import Reviews from "./Reviews"
import Rentals from "./Rentals"

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
    <div className="main-content">
      <div className="card-overlay centered">
        <div className="rental-grid">
          <Rentals property={property} />
          {property.map((property) => (
            <div className="rental-card" key={property.id}>
              <div className="images">
                <img
                  style={{ display: "block" }}
                  src={property.image}
                  alt={property.name}
                />
              </div>
              <h3>{property.name}</h3>
            </div>
          ))}
          <div className="input-wrapper">
            {/* <div className="rental-header"> */}
            <h3>Price: {property.price}</h3>
            <h3>Bedrooms/Bathrooms: {property.size}</h3>
          </div>

          <p>{property.description}</p>
          <div className="input-wrapper">
            {/* <Reviews setReviews={setReviews} /> */}
            <h3>Reviews:</h3>
            {/* {reviews?.map((review) => (
              <div key={review._id}>
                <p>Name: {review.name} </p>
                <p>Review: {review.reviewDetails}</p> */}
            {/* </div>
            ))} */}
          </div>
        </div>
      </div>

      <ul>
        <div className="links">
          <li>
            <Link to="/rentals/all">Back</Link>
          </li>
          <li>
            <Link to="/:rental_id/addreview">Add Review</Link>
          </li>
        </div>
      </ul>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}

export default rentalDetails
