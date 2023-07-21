import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { GetRentals } from "../services/Properties"

const Rentals = ({ user }) => {
  let navigate = useNavigate()
  const [property, setProperties] = useState([])

  useEffect(() => {
    const showProperties = async () => {
      const data = await GetRentals()
      setProperties(data)
    }
    showProperties()
  }, [])

  return user ? (
    <>
      <div className="main-content">
        <div className="card-overlay centered">
          <div className="rental-grid">
            {property.map((property) => (
              <div className="rental-card" key={property._id}>
                <Link to={`${property._id}`}>
                  <div className="images">
                    <img
                      style={{ display: "block" }}
                      src={property.image}
                      alt={property.name}
                    />
                  </div>
                  <h3>{property.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <ul>
          <div className="links">
            <li>
              <Link to="/">Back</Link>
            </li>
            <li>{/* <Link to="/rentals/addrental">Add Rental</Link> */}</li>
          </div>
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
export default Rentals
