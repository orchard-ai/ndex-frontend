import { useState } from "react";

import { useNavigate } from "react-router-dom"

import Input from "components/common/Input";

type PropType = {
    onSuccess: (credentials : string) => void
    onFailure: () => void
}

const Form = ({onSuccess, onFailure} : PropType) => {
    const [showSignUp, setShowSignUp] : [boolean, (value: boolean) => void]  = useState(false);
    const [email, setEmail] : [string, (value: string) => void]  = useState("");
    const [password, setPassword] : [string, (value: string) => void]  = useState("");
    const [showPassword, setShowPassword] : [boolean, (value: boolean) => void]  = useState(true);
    const navigate = useNavigate()

    const handleSignUp = () => {
        console.log("SIGN UP");

        // ON SUCCESS OF SIGN UP
        navigate("/addconnection", { replace: true })
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
                    onClick={handleSignUp}
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