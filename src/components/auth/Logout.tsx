import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { clearUserAuth } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

type PropType = {
  className?: string;
};

export default function Logout({ className }: PropType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      googleLogout();
      await dispatch(clearUserAuth());
    } catch (e) {
      onFailure(e as Error);
    }
  };

  const onSuccess = () => {
    navigate(ROUTES.AUTHENTICATE, { replace: true });
    console.log("Logged out successfully");
  };

  const onFailure = (error: Error) => {
    alert(`Logged out failed. Check logs for failure`);
    console.log(`Logged out failed with error: ${error.message}`);
  };

  return (
    <button
      id="signOutButton"
      onClick={handleLogout}
      className={`${className}`}
    >
      Log Out
    </button>
  );
}
