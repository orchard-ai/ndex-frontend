import { useState } from "react";

import { useNavigate } from "react-router-dom"

import Input from "components/common/Input";
import { AccountType, UserSignupRequest } from "api/models";
import { useAppDispatch } from "store";
import { createUser } from "store/user/userAuthSlice";
import { ROUTES } from "utils/constants";

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

    const handleCredentialSignUp = async() => {
        const form: UserSignupRequest = {
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

    const handleLogin = () => {
        console.log("Login");
    }

    // TODO(philiptam): Remove Signup Form and instead use another page for this
    if(showSignUp) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-ndex-text-white">
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email" />
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="password" />
            <div>
                <button className="
                text-ndex-text-white underline underline-offset-4
                hover:text-ndex-text-column-hover"
                    onClick={handleCredentialSignUp}
                >
                    {" "}
                        Sign Up
                    {" "}
                </button>
            </div>
            <div>
                Have an account?
                {" "}
                <button
                className="text-ndex-text-white underline underline-offset-4 hover:text-ndex-text-column-hover"
                onClick={() => {
                    setShowSignUp(false);
                }}>
                    {" "}
                        Login
                    {" "}
                </button>
            </div>
        </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-ndex-text-white">
            <Input placeholder={"Email"} value={email} onChange={setEmail} type="email" />
            <Input placeholder={"Password"} value={password} onChange={setPassword} type="password" />
            <div>
                <button className="
                    text-ndex-text-white underline underline-offset-4
                    hover:text-ndex-text-column-hover"
                    onClick={handleLogin}
                    >
                    Login
                </button>
            </div>
            <div>
                Don't have an account?
                {" "}
                <button className="text-ndex-text-white underline underline-offset-4 hover:text-ndex-text-column-hover"
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