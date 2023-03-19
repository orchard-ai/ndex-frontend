import { googleLogout } from "@react-oauth/google"
import { useAuth } from "hooks/useAuth"
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      googleLogout();
      logout(onSuccess, onFailure);
    } catch(e) {
      onFailure(e as Error);
    }
  }

  const onSuccess = () => {
    navigate("/", { replace: true })
    console.log("Logged out successfully");
  }

  const onFailure = (error : Error) => {
    alert(`Logged out failed. Check logs for failure`);
    console.log(`Logged out failed with error: ${error.message}`);
  }

  return (
    <button
      id="signOutButton"
      onClick={handleLogout}
      className="border-2 p-2"
    >
      Logout
    </button>
  )
}
