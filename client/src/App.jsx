import { useState, useEffect } from "react"
import "./App.css"
import Home from "./pages/Home"
import Rentals from "./components/Rentals"
import Reviews from "./components/Reviews"
import AddRental from "./pages/AddRental"
import RentalDetails from "./components/RentalDetails"
import { Route, Routes } from "react-router"
import Navigation from "./components/Navigation"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import ReservationForm from "./pages/ReservationForm"
import { CheckSession } from "./services/Auth"

const App = () => {
  const [properties, selectedProperty] = useState(null)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navigation user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rentals/all" element={<Rentals user={user} />} />
          <Route
            path="/rentals/all/:id"
            element={
              <RentalDetails
                user={user}
                properties={properties}
                selectedProperty={selectedProperty}
              />
            }
          />
          <Route path="/:rental_id/addreview" element={<Reviews />} />
          <Route path="rentals/addrental" element={<AddRental />} />
          <Route path="/:rental_id/reservation" element={<ReservationForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
