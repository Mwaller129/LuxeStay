import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const rentalDetails = (props) => {
  const [propertyId, setPropertyId] = useState("")
  const [property, setProperty] = useState(null)

  let { id } = useParams()

  useEffect(() => {
    let selectedProperty = props.property.find(
      (property) => property.id === parseInt(id)
    )
    setProperty(selectedProperty)
  }, [props.property, id])

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
      </div>
      <Link to="/rentals">Back</Link>
    </div>
  ) : null
}

export default rentalDetails
