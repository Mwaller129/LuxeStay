import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { GetComingSoon } from "../services/Properties"

const comingSoon = ({ user }) => {
  let navigate = useNavigate()
  const [newProperty, setNewProperties] = useState([])

  useEffect(() => {
    const showNewProperties = async () => {
      const data = await GetComingSoon()
      setNewProperties(data)
    }
    showNewProperties()
  }, [])

  return user ? (
    <>
      <div className="main-content">
        <div className="card-overlay centered">
          <div className="rental-grid">
            {newProperty.map((newProperty) => (
              <div className="rental-card" key={newProperty._id}>
                <div className="images">
                  <img
                    style={{ display: "block" }}
                    src={newProperty.image}
                    alt={newProperty.name}
                  />
                </div>
                <h3>{newProperty.name}</h3>
                <h3>{newProperty.availability}</h3>
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

export default comingSoon
