import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import Reviews from "./Reviews"

const rentalDetails = (props) => {
  const [propertyId, setPropertyId] = useState("")
  const [property, setProperty] = useState(null)
  const [reviews, setReviews] = useState([])

  let { id } = useParams()

  useEffect(() => {
    let selectedProperty = props.property.find(
      (property) => property.id === parseInt(id)
    )
    setProperty(selectedProperty)
  }, [props.property, id])

  const getReviews = async () => {
    try {
      let res = await axios.get("http://localhost:3001/rentals/:id")
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getReviews()
  }, [])

  return property ? (
    <div className="rental">
      <div className="rental-header">
        <img src={property.penthouse_image} alt={property.name} />
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
          <h3>Reviews</h3>
          {/* {reviews.map((review) => (
            <div key={review._id}>
              <p>Name:{review.name} </p>
              <p>Review: {review.reviewDetails}</p> */}
          <Reviews getReviews={getReviews} />
          {/* </div> */}
          {/* ))} */}
        </div>
      </div>
      <Link to="/rentals">Back</Link>
    </div>
  ) : null
}

export default rentalDetails
