import Login from "components/auth/Login/Dialog"
import Logout from "components/auth/Logout"

import { useIsLoggedIn } from "hooks/useAuth"

import Search from "routes/Search"

export default function Home() {
  const isLoggedIn = useIsLoggedIn()
  
  if(isLoggedIn) {
    return (
      <Search />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-ndex-background-1">
      {/*  Fixed background */}
      <div className="fixed items-center justify-center w-full h-full 
        sm:bg-gradient-to-br sm:from-ndex-login-background-1 sm:via-ndex-login-background-2 sm:to-ndex-login-background-3
      "/>
      {/*  Relative background screen show above the background */}
      <div className="relative z-10">
        <Login />
      </div>
    </div>
    
  )
}
