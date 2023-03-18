import Login from "components/Auth/Login"
import Logout from "components/Auth/Logout"
import { useIsLoggedIn } from "hooks/useAuth"
import Search from "routes/Search"

export default function Home() {
  const isLoggedIn = useIsLoggedIn()
  return isLoggedIn ? (
    <Search />
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-screen sm:bg-gradient-to-br sm:from-ndex-login-background-1 sm:via-ndex-login-background-2 sm:to-ndex-login-background-3">
      <Login />
    </div>
  )
}
