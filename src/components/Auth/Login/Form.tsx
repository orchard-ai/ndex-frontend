import { useState } from "react";

import Input from "components/Input";

type PropType = {
    onSuccess: (credentials : string) => void
    onFailure: () => void
}

const Form = ({onSuccess, onFailure} : PropType) => {
    const [showSignUp, setShowSignUp] : [boolean, (value: boolean) => void]  = useState(false);
    const [email, setEmail] : [string, (value: string) => void]  = useState("");
    const [password, setPassword] : [string, (value: string) => void]  = useState("");  

    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-ndex-text-white">
            <Input placeholder={"Email"} value={email} onChange={setEmail} />
            <Input placeholder={"Password"} value={password} onChange={setPassword} />
            <div>
                <button>
                    {" "}
                    <u> Login </u>
                    {" "}
                </button>
            </div>
            <div>
                Don't have an account?
                {" "}
                <button>
                    {" "}
                    <u> Sign up </u>
                    {" "}
                </button>
            </div>
        </div>
    )
}

export default Form;