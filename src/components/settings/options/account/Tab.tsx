import { useState } from "react"
import LinkButton from "components/common/LinkButton";
import Logout from "components/auth/Logout";
import EditingCard from "components/settings/options/account/EditingCard";
import DefaultCard from "components/settings/options/account//DefaultCard";

export default function AccountTab() {
  const [modifying, setModifying] = useState(false);
  // const [] = useState();
  //SHOW REAL USER INFORMATION

  const [user, setUser] = useState({name: "John Smith", email: "johnsmith@orchid.ai"});

  return (
    <>
      <div className="flex flex-col w-full items-center space-y-8 mt-4 bg-ndex-background-1">
        {
          modifying 
          ? <EditingCard user={user} setModifying={setModifying} />
          : <DefaultCard user={user} setModifying={setModifying} />
        } 
      </div>

    </>
  )
}

