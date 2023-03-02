import { createContext, useContext } from "react"
import { User } from "utils/types"

type AuthContextType = {
  user: User
  login: (data: any) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}
