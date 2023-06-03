import { useState, useEffect } from "react";
import LinkButton from "components/common/LinkButton";
import Logout from "components/auth/Logout";
import { useAuth } from "hooks/useAuth";
import EditingCard from "components/settings/options/account/EditingCard";
import DefaultCard from "components/settings/options/account//DefaultCard";

import { useAppDispatch, useAppSelector } from "store";
import {
  userDataEmailSelector,
  userDataFetchStatusSelector,
  userEmail,
} from "store/user/userDataSlice";

export default function AccountTab() {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  // TODO:(philiptam) GET ACTUAL USER (NEED TO STORE IN LOCAL CACHE)
  const email = useAppSelector(userDataEmailSelector);
  const fetchStatus = useAppSelector(userDataFetchStatusSelector);

  useEffect(() => {
    dispatch(userEmail());
  }, [fetchStatus]);

  return (
    <>
      <div className="flex flex-col w-full items-center space-y-8 mt-4 bg-ndex-light-background-primary dark:bg-ndex-dark-background-default">
        {editing ? (
          <EditingCard email={email} setEditing={setEditing} />
        ) : (
          <DefaultCard email={email} setEditing={setEditing} />
        )}
      </div>
    </>
  );
}
