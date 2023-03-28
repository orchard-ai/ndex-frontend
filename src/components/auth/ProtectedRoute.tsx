import { Navigate } from "react-router-dom"
import { useAuth } from "hooks/useAuth"

type PropType = {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children } : PropType) => {
  const { user } = useAuth()
  if (
    user === null ||
    (Object.keys(user).length === 0 && user.constructor === Object)
  ) {
    // user is not authenticated
    return <Navigate to="/" />
  }
  return children
}
