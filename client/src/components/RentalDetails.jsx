import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetRental, GetReview } from "../services/Properties"
import axios from "axios"
import Reviews from "./Reviews"
import Rentals from "./Rentals"

const rentalDetails = (props) => {
  //   let navigate = useNavigate()
  const [property, setProperty] = useState([])
  const [review, setReview] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const showProperty = async () => {
      const data = await GetRental(id)
      setProperty(data)
    }
    showProperty()
  }, [])

  useEffect(() => {
    const showReview = async () => {
      const data = await GetReview(id)
      setReview(data)
    }
    showReview()
  }, [])
  console.log(review)

  //   useEffect(() => {
  //     let selectedProperties = props.properties.find(
  //       (property) => property._id === parseInt(id)
  //     )
  //     setProperties(selectedProperties)
  //   }, [props.properties, id])

  //   const getReviews = async () => {
  //     try {
  //       let res = await axios.get(`http://localhost:3001/reviews/${id}/reviews`)
  //       console.log(res)
  //       setReviews(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   useEffect(() => {
  //     getReviews()
  //   }, [])

  return property ? (
    <div className="main-content">
      <div className="card-overlay centered">
        <div className="rental-grid">
          <div className="rental-card">
            <div className="images">
              <img src={property.image} alt={property.name} />
            </div>
            <h3>{property.name}</h3>
          </div>

          <div className="input-wrapper">
            <div className="rental-header">
              <h3>Price: {property.price}</h3>
              <h3>Bedrooms/Bathrooms: {property.size}</h3>
            </div>

            <p>{property.description}</p>
            <div className="input-wrapper">
              {/* <Reviews setReviews={setReviews} /> */}
              <h3>Reviews:</h3>
              {/* {review.map((review) => (
                <div key={review._id}> */}
              <p>Name: {review.name} </p>
              <p>Review: {review.reviewDetails}</p>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>

      <ul>
        <div className="links">
          <li>
            <Link to="/rentals/all">Back</Link>
          </li>
          <li>
            <Link to="/:id/addreview">Add Review</Link>
          </li>
          <li>
            <Link to="/:rental_id/reservation">Check Availability</Link>
          </li>
        </div>
      </ul>
    </div>
  ) : (
    // </div>
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}
export default rentalDetails
