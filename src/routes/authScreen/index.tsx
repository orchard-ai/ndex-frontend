import Login from "components/auth/login/Dialog";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "store";
import { userIdSelector, userNdexTokenSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

export default function AuthScreen() {
  // const ndexToken = useAppSelector(userNdexTokenSelector);
  const userId = useAppSelector(userIdSelector);

  if(userId !== null) {
    return <Navigate to={ROUTES.SEARCH}/>
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