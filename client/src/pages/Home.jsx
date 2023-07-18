import { Link } from "react-router-dom"

const Home = () => {
  return (
    <body className="main-content">
      <div className="fadeIn-text">
        <h1>Welcome to LuxeStay</h1>
        <button className="enterbutton">
          <Link to="/signin">Enter</Link>
        </button>
      </div>
    </body>
  )
}

export default Home
