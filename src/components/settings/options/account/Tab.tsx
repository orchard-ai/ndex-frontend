import { useState } from "react"
import LinkButton from "components/common/LinkButton";
import Logout from "components/auth/Logout";
import { useAuth } from "hooks/useAuth";
import EditingCard from "components/settings/options/account/EditingCard";
import DefaultCard from "components/settings/options/account//DefaultCard";


export default function AccountTab() {
  const [editing, setEditing] = useState(false);
  // TODO:(philiptam) GET ACTUAL USER (NEED TO STORE IN LOCAL CACHE)

  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <div className="flex flex-col w-full items-center space-y-8 mt-4 bg-ndex-light-background-primary dark:bg-ndex-dark-background-default">
        {
          editing
          ? <EditingCard user={user} setEditing={setEditing} />
          : <DefaultCard user={user} setEditing={setEditing} />
        }
      </div>
    </>
  )
}

