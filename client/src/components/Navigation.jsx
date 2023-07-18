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
          <ul>
            <div className="links">
              <li>
                <Link to="/rentals/all" className="navLinks">
                  Rentals
                </Link>
              </li>
              <li>
                <Link to="/comingsoon" className="navLinks">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link onClick={handleLogOut} to="/" className="navLinks">
                  Sign Out
                </Link>
              </li>
            </div>
          </ul>
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
