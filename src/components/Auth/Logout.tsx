import { googleLogout } from "@react-oauth/google"

export default function Logout() {
  const onSuccess = () => {
    console.log("Logged out successfully")
  }

  return (
    <button
      id="signOutButton"
      onClick={() => googleLogout()}
      className="border-2 p-2"
    >
      Logout
    </button>
  )
}
