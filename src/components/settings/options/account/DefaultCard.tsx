import { useState } from "react"

type PropType = {
    user: {email: string, name: string}
    setEditing: (value: boolean) => void
}

const DefaultCard = ({user, setEditing} : PropType) => {
  return (
    <div className="relative flex flex-col w-[90%] p-12 space-y-4 justify-center rounded-lg bg-ndex-background-2">
      <div className="absolute top-8 right-8">
          <button className="pt-2 pb-2 pr-4 pl-4 rounded-sm text-ndex-text-white underline underline-offset-4 hover:text-ndex-text-grey active:text-ndex-text-grey-variant" onClick={() => setEditing(true)}>  Edit Profile </button>
      </div>
      <div className="space-y-2">
        <div className="text-ndex-text-grey font-bold text-sm">
            DISPLAY NAME
        </div>
        <div className="text-md pt-2">
            {user.name}
        </div>
      </div>
      <div className="space-y-2 ">
        <div className="text-ndex-text-grey font-bold text-sm">
          EMAIL
        </div>
        <div className="text-md pt-2">
          {user.email}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-ndex-text-grey text-sm font-bold">
          PASSWORD
        </div>
        <div className="flex justify-between pt-2">
          <p> ••••••••••••••••• </p>
        </div>
      </div>
    </div>
  );
 }

export default DefaultCard;