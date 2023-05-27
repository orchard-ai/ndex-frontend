import { useState } from "react";

import { useNavigate } from "react-router-dom"

import CloseIcon from "assets/icons/tsx/CloseIcon";
import Input from "components/common/Input";

import { AccountType, UserAuthRequest } from "api/models";
import { useAppDispatch, useAppSelector } from "store";
import { createUser, loginUser, userFetchStatusSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";
import { isFetchStateFailed, isFetchStatePending } from "utils/helpers";


const Form = () => {
    const [showSignUp, setShowSignUp] : [boolean, (value: boolean) => void]  = useState(false);
    const [email, setEmail] : [string, (value: string) => void]  = useState("");
    const [password, setPassword] : [string, (value: string) => void]  = useState("");
    const [showPassword, setShowPassword] : [boolean, (value: boolean) => void]  = useState(true);
    const [failureMessage, setShowFailureMessage] : [string, (value: string) => void] = useState("");
    const [authenticating,  setAuthenticating]  : [boolean, (value: boolean) => void]  = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const userFetchState = useAppSelector(userFetchStatusSelector);

    const renderButton = (buttonText: string, onClickFunc: () => void) => {
        if(isFetchStatePending(userFetchState)) {
            return (
                <div className="
                    flex text-ndex-button-text-filled-light border-2 rounded-lg w-40 h-8 shadow-md bg-ndex-button-filled-light
                    active:bg-ndex-button-active-light justify-center items-center"
                >
                    <div className="animate-spin border-b-2 border-gray-400 h-4 w-4 rounded-full items-center"/>
                </div>
            );
        } else {
            return (
                <input type="submit" disabled={authenticating} className={`
                    flex text-ndex-button-text-filled-light border-2  rounded-lg w-40 h-8 shadow-md bg-ndex-button-filled-light
                    active:bg-ndex-button-active-light justify-center items-center}
                `}
                    onClick={onClickFunc}
                    value={buttonText}
                />
            );
        }
    };

    const handleCredentialSignUp = async() => {
        const form: UserAuthRequest = {
            email: email,
            oauth_provider_id: null,
            oauth_access_token: null,
            password: password,
            account_type: AccountType.Credentials
        };
        setAuthenticating(true);

        await dispatch(createUser(form));

        if(isFetchStateFailed(userFetchState)) {
            setAuthenticating(false);
            // TODO: GET REASON FOR FAILURE
            console.log('Signup failed');
            setShowFailureMessage("Signup failed please contact contact@ndex.gg for support");
        } else {
            // ON SUCCESS OF SIGN UP
            navigate(ROUTES.ADD_FIRST_CONNECTION, { replace: true })
        }
    }

    const handleLogin = async() => {
        const form: UserAuthRequest = {
            email: email,
            oauth_provider_id: null,
            oauth_access_token: null,
            password: password,
            account_type: AccountType.Credentials
        };
        setAuthenticating(true);
        await dispatch(loginUser(form));

        if(isFetchStateFailed(userFetchState)) {
            // TODO: BETTER ERROR SHOWING
            setAuthenticating(false);
            console.log('login failed')
            setShowFailureMessage("Incorrect username or password.");
        } else {
            // ON SUCCESS OF SIGN UP
            navigate(ROUTES.SEARCH, { replace: true })
        }
    }

    // TODO(philiptam): Remove Signup Form and instead use another page for this
    if(showSignUp) {
        return (
        <form onSubmit={handleCredentialSignUp} className="flex flex-col items-center justify-center w-full h-full space-y-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default">
             {
                failureMessage && (
                <div className="flex w-3/4 h-[120px] md:h-[65px] pl-4 text-red-700 bg-red-100 items-center">
                    <div>
                        {failureMessage}
                    </div>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setShowFailureMessage("");
                    }}>
                        <CloseIcon className="p-2 w-8 h-8" />
                    </button>
                </div>
                )
            }
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email"  showError={failureMessage !== ""} />
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="current-password"  showError={failureMessage !== ""} />
            {renderButton("Sign up", handleCredentialSignUp)}
            <div>
                Have an account?
                {" "}
                <button
                disabled={authenticating}
                className="mt-12 underline underline-offset-4 hover:text-ndex-text-column-hover text-ndex-light-text-primary dark:text-ndex-dark-text-default"
                onClick={(event) => {
                    event.preventDefault();
                    setShowSignUp(false);
                    setShowFailureMessage("");
                }}>
                    {" "}
                        Log in
                    {" "}
                </button>
            </div>
        </form>
        )
    }

    return (
        <form onSubmit={handleLogin} className="flex flex-col items-center justify-center w-full h-full space-y-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default">
             {
                failureMessage && (
                <div className="flex w-3/4 h-[85px] md:h-[65px] pl-4 text-red-700 bg-red-100 items-center">
                    <div>
                        {failureMessage}
                    </div>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setShowFailureMessage("");
                    }}>
                        <CloseIcon className="p-2 w-8 h-8" />
                    </button>
                </div>
                )
            }
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email"  showError={failureMessage !== ""}/>
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="password" showError={failureMessage !== ""} />
            {renderButton("Log In", handleLogin)}
            <div>
                Don't have an account?
                {" "}
                <button 
                disabled={authenticating}
                className="mt-12 underline underline-offset-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default hover:text-ndex-text-column-hover"
                onClick={(event) => {
                    event.preventDefault();
                    setShowSignUp(true);
                    setShowFailureMessage("");
                }}
                >
                    {" "}
                    Sign up
                    {" "}
                </button>
            </div>
        </form>
    )
}

export default Form;