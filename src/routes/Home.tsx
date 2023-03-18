import Login from "components/Auth/Login"
import Logout from "components/Auth/Logout"
import { useIsLoggedIn } from "hooks/useAuth"
import Search from "routes/Search"

export default function Home() {
  const isLoggedIn = useIsLoggedIn()

  return isLoggedIn ? (
    <Search />
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-full bg-ndex-background-1">
      <h1 className="text-2xl">Home</h1>
      <Login />
      <Logout />
    </div>
  )
}
