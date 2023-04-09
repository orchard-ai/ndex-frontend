import { useState } from "react"
import Logout from "components/auth/Logout";

type PropType = {
    user: {email: string, name: string}
    setEditing: (value: boolean) => void
}

const DefaultCard = ({user, setEditing} : PropType) => {
  return (
    <div className="flex flex-col w-[80%] p-12 space-y-4 justify-center rounded-lg bg-ndex-background-2">
      <div className="space-y-2 font-bold">
        <div className="text-ndex-text-grey text-sm">
            Display Name
        </div>
        <div className="text-md pt-2">
            {user.name}
        </div>
      </div>
      <div className="space-y-2 font-bold">
        <div className="text-ndex-text-grey">
          Email
        </div>
        <div className="text-md pt-2">
          {user.email}
        </div>
      </div>
      <hr></hr>
      <div className="space-y-4 font-bold">
        <div className="text-ndex-text-grey">
          Account Actions
        </div>
        <div className="flex space-x-4">
          <button className="pt-2 pb-2 pr-4 pl-4 rounded-sm text-ndex-text-white border-ndex-button-bordered-grey bg-ndex-button-bordered-grey" onClick={() => setEditing(true)}>  Edit Profile </button>
          <button className="pt-2 pb-2 pr-4 pl-4 rounded-sm text-ndex-text-white border-ndex-button-bordered-grey bg-ndex-button-bordered-grey">  Change Password </button>
          <Logout className="pt-2 pb-2 pr-4 pl-4 rounded-sm text-ndex-text-white border-ndex-button-bordered-red bg-ndex-button-bordered-red" />
        </div>
      </div>
    </div>
  );
 }

export default DefaultCard;