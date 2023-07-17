import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div>
          <h3>Welcome {user.email}!</h3>
        </div>
        <div className="links">
          <Link to="/rentals" className="navLinks">
            Rentals
          </Link>
          |<br></br>
          <Link onClick={handleLogOut} to="/" className="navLinks">
            Sign Out
          </Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        {/* <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          />
        </div> */}
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
