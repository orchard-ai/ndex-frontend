import { GoogleLogin } from "@react-oauth/google"

export default function Login() {
  const handleSuccess = (credentialRes) => {
    console.log("success, current user: ", credentialRes)
  }
  const handleFailure = () => {
    console.log("failure")
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <input
          type="text"
          className="w-80 h-10 border-2 border-gray-300 rounded-md"
          placeholder="Username"
        />
        <input
          type="password"
          className="w-80 h-10 border-2 border-gray-300 rounded-md"
          placeholder="Password"
        />
        <button className="w-80 h-10 border-2 border-gray-300 rounded-md">
          Login
        </button>
        <button className="w-80 h-10 border-2 border-gray-300 rounded-md">
          Login with Google
        </button>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id="signInButton">
          <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
        </div>
      </div>
    </div>
  )
}
