import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "hooks/useLocalStorage"
import { AuthContext } from "hooks/useAuth"

type PropType = {
  children: React.ReactNode
}

export const AuthProvider = ({ children } : PropType) => {
  const [user, setUser] = useLocalStorage("user", null)
  const navigate = useNavigate()

  // call this function when you want to authenticate the user
  const login = async (
      data: any,
      onSuccess: () => void, 
      onFailure?: (error: Error) => void) => {
    try {
      await setUser(data)
      onSuccess();
    } catch(e) {
      if (onFailure) {
        onFailure(e as Error);
      }
    }
  }

  // call this function to sign out logged in user
  const logout = (
      onSuccess : () => void,  
      onFailure?: (error: Error) => void) => {
    try {
      setUser(null)
      onSuccess();
    } catch(e) {
      if (onFailure) {
        onFailure(e as Error);
      }
    }
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
