import { CredentialResponse, GoogleLogin } from "@react-oauth/google"

import Form from "components/auth/login/Form";

import Logo from "components/common/Logo";
import { useAppDispatch } from "store";
import { AccountType, UserAuthRequest } from "api/models";
import { createUser } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";
import { useNavigate } from "react-router-dom";
import { decodeGoogleCredential } from "utils/googleAuth";

type PropType = {
  className?: string
}

export default function Login({ className } : PropType) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleGoogleSuccess = async(credentialRes: CredentialResponse) => {
    const ticket: any = decodeGoogleCredential(credentialRes);

    const form: UserAuthRequest = {
      email: ticket.email,
      oauth_provider_id: credentialRes.clientId,
      oauth_access_token: credentialRes.clientId,
      password: undefined,
      account_type: AccountType.Google
    };

    await dispatch(createUser(form));

    // ON SUCCESS OF SIGN UP
    navigate(ROUTES.ADD_CONNECTION, { replace: true });
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
      className={`
      flex flex-col items-center justify-center rounded-lg bg-ndex-background-1
       sm:pr-24  sm:pl-24  sm:pt-16  sm:pb-16
       md:pr-32  md:pl-32  md:pt-24  md:pb-24
       ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-ndex-text-white">
        <Logo className="text-6xl text-ndex-text-white" />
        <h2 className="text-2xl tracking-normal p-5">
          Index anything, search <b>everything</b>
        </h2>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id="signInButton">
          <GoogleLogin
            text="continue_with"
            theme="outline"
            size="medium"
            ux_mode="popup"
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
          <p>or</p>
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
