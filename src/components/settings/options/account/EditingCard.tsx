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
      <div className="relative flex flex-col w-[90%] p-12 space-y-4 justify-center rounded-lg bg-ndex-background-2">
        <div className="absolute top-8 right-8">
          <button className="pt-2 pb-2 pr-4 pl-4 rounded-sm text-ndex-text-white underline underline-offset-4 hover:text-ndex-text-grey active:text-ndex-text-grey-variant" onClick={updateUser}> Confirm Edit </button>
        </div>
        <div className="space-y-4">
          <div className="text-ndex-text-grey font-bold text-sm">
              DISPLAY NAME
          </div>
          <Input value={name} onChange={setName} placeholder={"Name"} />
        </div>
        <div className="space-y-2 ">
          <div className="text-ndex-text-grey font-bold text-sm">
            EMAIL
          </div>
          <Input value={email} onChange={setEmail} placeholder={"Email"} />
        </div>
        <div className="space-y-4">
          <div className="text-ndex-text-grey  font-bold text-sm">
            PASSWORD
          </div>
          <button className="py-1 px-4 font-bold text-sm rounded-sm text-ndex-text-white border-ndex-button-bordered-red border-spacing-4 border-2 hover:bg-ndex-button-bordered-red">
            Change Password
          </button>
        </div>
      </div>
    );
  }


export default EditingCard;