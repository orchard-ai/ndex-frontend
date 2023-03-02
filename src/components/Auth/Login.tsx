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
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id="signInButton">
          <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
        </div>
      </div>
    </div>
  )
}
