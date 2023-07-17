import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { GetProperties } from "../services/Properties"

const Rentals = ({ user }) => {
  let navigate = useNavigate()
  const [property, setProperties] = useState([])

  useEffect(() => {
    const showProperties = async () => {
      const data = await GetProperties()
      setProperties(data)
    }
    showProperties()
  }, [])

  return user ? (
    <>
      <div className="card-overlay centered">
        <div className="rental-grid">
          {property.map((property) => (
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
      </div>
      <Link to="/">Back</Link>
      <Link to="/addrental">Add a Rental</Link>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}
export default Rentals
