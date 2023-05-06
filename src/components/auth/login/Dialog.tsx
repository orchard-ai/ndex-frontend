import { CredentialResponse, GoogleLogin } from "@react-oauth/google"

import Form from "components/auth/login/Form";

import Logo from "components/common/Logo";
import { useAppDispatch } from "store";
import { AccountType, UserAuthRequest } from "api/models";
import { createUser } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";
import { useNavigate } from "react-router-dom";
import { decodeGoogleCredential } from "utils/googleAuth";
import { isUsingDarkModeSelector, toggleTheme } from "store/local/localSettingsSlice";
import { useAppSelector } from "store";

type PropType = {
  className?: string
}

export default function Login({ className } : PropType) {
  const darkMode = useAppSelector(isUsingDarkModeSelector);
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

  const handleLogoPress = () => {
    dispatch(toggleTheme());
  }

  return (
    <div
      className={`
      flex items-center justify-center rounded-lg
       ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full space-y-3 text-ndex-text-white">
        <Logo className="text-6xl text-ndex-text-white" onPress={handleLogoPress}/>
        <h2 className="text-2xl tracking-normal p-5 text-ndex-light-text-primary dark:text-ndex-text-white">
          Search your things, in <b>one place</b>
        </h2>
        {/* if doesn't work, replace 127.0.0.1 with localhost in URL */}
        <div id="signInButton">
          <GoogleLogin
            text="continue_with"
            theme={`${darkMode ? "outline" : "filled_black"}`}
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
          <p className="text-ndex-light-text-primary dark:text-ndex-dark-text-default">or</p>
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
