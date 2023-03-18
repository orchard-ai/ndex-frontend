import { googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
      googleLogout();
      onSuccess();
  }

  const onSuccess = () => {
    console.log("Logged out successfully");
    navigate('/');
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
