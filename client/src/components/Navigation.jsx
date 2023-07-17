import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

const Navigation = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className="welcome">
          <h3>Welcome {user.email}!</h3>
          <br></br>
          <br></br>
          <div className="links">
            <Link to="/rentals/all" className="navLinks">
              Rentals
            </Link>

            <Link onClick={handleLogOut} to="/" className="navLinks">
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <>
      <Link>{user ? userOptions : publicOptions}</Link>
    </>
  )
}

export default Navigation
