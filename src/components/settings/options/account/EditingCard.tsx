import { useState } from "react"
import Logout from "components/auth/Logout";
import Input from "components/common/Input";

type PropType = {
    user: {email: string, name: string}
    setEditing: (value: boolean) => void
}

const EditingCard = ({user, setEditing} : PropType) => {
    const [name, setName]  = useState(user.name);
    const [email, setEmail]  = useState(user.email);

    const updateUser = () => {
        user.name = name
        user.email = email
        setEditing(false);
    }

    return (
      <div className="relative flex flex-col w-[90%] p-12 space-y-4 justify-center rounded-lg bg-ndex-light-background-2
        dark:bg-ndex-dark-background-grey"
      >
        <div className="absolute top-8 right-8">
          <button
            className="pt-2 pb-2 pr-4 pl-4 rounded-lg text-ndex-light-text-primary hover:bg-ndex-light-background-3
            dark:text-ndex-dark-text-default
            dark:hover:bg-ndex-dark-background-default
            transition duration-200 ease-in-out"
            onClick={updateUser}
          >
            confirm edit
          </button>
        </div>
        <div className="space-y-4">
          <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm">
            DISPLAY NAME
          </div>
          <Input value={name} onChange={setName} showLabel={false} placeholder={"Name"} />
        </div>
        <div className="space-y-2 ">
          <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm">
            EMAIL
          </div>
          <Input value={email} onChange={setEmail} showLabel={false}  placeholder={"Email"} />
        </div>
        <div className="space-y-4">
          <div className="text-ndex-text-grey  font-bold text-sm">
            PASSWORD
          </div>
          <button className="py-2 px-4 font-bold text-sm rounded-lg text-ndex-dark-text-default bg-ndex-button-bordered-red hover:opacity-80">
            Change Password
          </button>
        </div>
      </div>
    );
  }


export default EditingCard;