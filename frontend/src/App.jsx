import { useState } from "react"
import "./App.css"
import Home from "./pages/Home"
import Rentals from "./components/Rentals"
import RentalDetails from "./components/RentalDetails"
import propertyData from "./data/properties.json"
import { Route, Routes } from "react-router"

const App = () => {
  const [property, setProperty] = useState(propertyData)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals property={property} />} />
        <Route
          path="/rentals/:id"
          element={<RentalDetails property={property} />}
        />
      </Routes>
    </div>
  )
}

export default App
