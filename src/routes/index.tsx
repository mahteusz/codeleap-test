import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "../pages/Signup"
import Home from "../pages/Home"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes