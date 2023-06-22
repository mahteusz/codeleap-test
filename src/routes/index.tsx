import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Protected } from "../components/"
import { Signup } from "../pages/"
import { Home } from "../pages/"

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