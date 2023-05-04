import Login from "components/auth/login/Dialog";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "store";
import { usertokenSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

export default function AuthScreen() {
  const token = useAppSelector(usertokenSelector);

  if(token !== null) {
    return <Navigate to={ROUTES.SEARCH}/>
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen min-h-[600px] bg-ndex-light-background-1 dark:bg-ndex-background-1`}>
      {/*  Fixed background */}
      <div className={`fixed items-center justify-center w-full h-full min-h-[600px]`}/>
      {/*  Relative background screen show above the background */}
      <Login className="z-10 relative" />
    </div>
  )
}