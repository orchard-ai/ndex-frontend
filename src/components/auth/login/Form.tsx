import { useState } from "react";

import { useNavigate } from "react-router-dom"

import Input from "components/common/Input";
import { AccountType, UserAuthRequest } from "api/models";
import { useAppDispatch, useAppSelector } from "store";
import { createUser, loginUser, userFetchStatusSelector } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";
import { isFetchStatePending } from "utils/helpers";

type PropType = {
    onSuccess: (credentials : string) => void
    onFailure: () => void
}

const Form = ({onSuccess, onFailure} : PropType) => {
    const [showSignUp, setShowSignUp] : [boolean, (value: boolean) => void]  = useState(false);
    const [email, setEmail] : [string, (value: string) => void]  = useState("");
    const [password, setPassword] : [string, (value: string) => void]  = useState("");
    const [showPassword, setShowPassword] : [boolean, (value: boolean) => void]  = useState(true);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const userFetchState = useAppSelector(userFetchStatusSelector);

    const renderButton = (buttonText: string, onClickFunc: () => void) => {
        if(isFetchStatePending(userFetchState)) {
            return (
                <button className="
                    flex text-ndex-button-text-filled-light border-2 rounded-lg w-40 h-8 shadow-md bg-ndex-button-filled-light
                    active:bg-ndex-button-active-light justify-center items-center"
                >
                    <div className="animate-spin border-b-2 border-gray-400 h-4 w-4 rounded-full items-center"/>
                </button>
            );
        } else {
            return (
                <button className="flex text-ndex-button-text-filled-light border-2 rounded-lg w-40 h-8 shadow-md bg-ndex-button-filled-light
                    active:bg-ndex-button-active-light justify-center items-center"
                    onClick={onClickFunc}
                >
                    {buttonText}
                </button>
            );
        }
    };

    const handleCredentialSignUp = async() => {
        const form: UserAuthRequest = {
            email: email,
            oauth_provider_id: undefined,
            oauth_access_token: undefined,
            password: password,
            account_type: AccountType.Credentials
        };

        await dispatch(createUser(form));

        // ON SUCCESS OF SIGN UP
        navigate(ROUTES.ADD_CONNECTION, { replace: true })
    }

    const handleLogin = async() => {
        const form: UserAuthRequest = {
            email: email,
            oauth_provider_id: undefined,
            oauth_access_token: undefined,
            password: password,
            account_type: AccountType.Credentials
        };

        await dispatch(loginUser(form));

        // ON SUCCESS OF SIGN UP
        navigate(ROUTES.SEARCH, { replace: true })
    }

    // TODO(philiptam): Remove Signup Form and instead use another page for this
    if(showSignUp) {
        return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default">
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email" />
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="password" />
            {renderButton("Sign up", handleCredentialSignUp)}
            <div>
                Have an account?
                {" "}
                <button
                className="ml-2 underline underline-offset-4 hover:text-ndex-text-column-hover text-ndex-light-text-primary dark:text-ndex-dark-text-default"
                onClick={() => {
                    setShowSignUp(false);
                }}>
                    {" "}
                        Log in
                    {" "}
                </button>
            </div>
        </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default">
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email" />
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="password" />
            {renderButton("Log In", handleLogin)}
            <div>
                Don't have an account?
                {" "}
                <button className="ml-2 underline underline-offset-4 text-ndex-light-text-primary dark:text-ndex-dark-text-default hover:text-ndex-text-column-hover"
                 onClick={() => {
                    setShowSignUp(true);
                }}>
                    {" "}
                    Sign up
                    {" "}
                </button>
            </div>
        </div>
    )
}

export default Form;