import { useSelector } from "react-redux"
import { State } from "../../redux/reducers"
import { Outlet, Navigate } from "react-router-dom"
import { Props } from "./types"

const Protected = ({ redirectPath }: Props) => {

  const auth = useSelector((state: State) => state.auth)

  return (
    auth.username ? <Outlet /> : <Navigate to={redirectPath} replace/>
  )
}

export default Protected