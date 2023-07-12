import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Rentals = (props) => {
  const [property, setProperty] = useState("")

  let { id } = useParams()

  useEffect(() => {
    let selectedProperty = props.property.find(
      (property) => property.id === parseInt(id)
    )
    setProperty(selectedProperty)
  }, [props.property, id])
  return (
    <>
      <div className="rental-grid">
        {props.property.map((property) => (
          <div className="rental-card" key={property.id}>
            <Link to={`${property.id}`}>
              <img
                style={{ display: "block" }}
                src={property.penthouse_image}
                alt={property.name}
              />
              <h3>{property.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/">Back</Link>
    </>
  )
}
export default Rentals
