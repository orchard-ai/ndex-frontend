import Login from "components/auth/login/Dialog";

import { useIsLoggedIn } from "hooks/useAuth"

import Search from "routes/search/Search"

export default function Home() {
  const isLoggedIn = useIsLoggedIn()

  if(isLoggedIn) {
    // MAYBE DO FIRST CONNECTION CTO HERE
    return (
      <Search />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-ndex-background-1 min-h-[600px]">
      {/*  Fixed background */}
      <div className="fixed items-center justify-center w-full h-full  min-h-[600px]
        sm:bg-gradient-to-br sm:from-ndex-login-background-1 sm:via-ndex-login-background-2 sm:to-ndex-login-background-3
      "/>
      {/*  Relative background screen show above the background */}
      <Login className="z-10 relative" />
    </div>

  )
}
