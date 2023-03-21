import { useAuth } from "hooks/useAuth"
import { GoogleLogin } from "@react-oauth/google"

import Form from "components/auth/Login/Form";

import Logo from "components/common/Logo";

export default function Login() {
  const { login } = useAuth()

  const handleGoogleSuccess = (credentialRes: any) => {
    login(
      credentialRes, 
      () => {
        console.log("success, current user: ", credentialRes)
      }
    );
  }

  const handleGoogleFailure = () => {
    alert("Login failed");
  }

  const handleLoginSuccess = (credentials : any) => {
    console.log("Success");
  }

  const handleLoginFailure = () => {
    console.log("Failure");
  }

  return (
    <div
      className="
      flex flex-col items-center justify-center rounded-lg bg-ndex-background-1
       sm:pr-24  sm:pl-24  sm:pt-16  sm:pb-16
       md:pr-32  md:pl-32  md:pt-24  md:pb-24
      "
    >
      <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-ndex-text-white">
        <Logo className="text-ndex-text-white" />
        <h2 className="text-2xl tracking-title">
          Index anything, search <b>everything</b>
        </h2>
        <div className="font-bold">Login with:</div>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id="signInButton">
          <GoogleLogin
            text="continue_with"
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div>
        <div className="flex items-center justify-start space-x-2">
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              width: 100,
            }}
          />
          <p>Or</p>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              width: 100,
            }}
          />
        </div>
        <Form 
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure} 
        />
      </div>
    </div>
  )
}
