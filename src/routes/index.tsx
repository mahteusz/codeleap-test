import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "../pages/Signup"
import Home from "../pages/Home"
import Protected from "../components/Protected"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route element={<Protected redirectPath="/" />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes