import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

const Navigation = ({ user, handleLogOut }) => {
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
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="/">Navbar</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav> */}
      {/* </Container> */}
      {/* // </Navbar> */}
      {/* // <br /> */}
      <main className="navigation">
        <nav vlass="nav">
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
        <div className="main-content"></div>

        <footer className="footer">Footer</footer>
      </main>

      {/* <Link>{user ? userOptions : publicOptions}</Link> */}
    </>
  )
}

export default Navigation
