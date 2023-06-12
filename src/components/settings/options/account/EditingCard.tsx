import { useState } from "react";
import Input from "components/common/Input";
import { useAppDispatch } from "store";
import { deleteUser } from "store/user/userAuthSlice";

type PropType = {
  email: string;
  setEditing: (value: boolean) => void;
};

const EditingCard = ({ email, setEditing }: PropType) => {
  const [dummyEmail, setEmail] = useState(email);
  const [deleteInput, setDeleteInput] = useState('');

  const dispatch = useAppDispatch();

  const updateUser = () => {
    // UPDATE EMAIL HERE
    setEditing(false);
  };

  const onClickDelete = async () => {
    if(deleteInput === "delete") {
      await dispatch(deleteUser());
    }
  }

  const isDeleteDisabled = () => {
    return deleteInput !== "delete";
  }

  return (
    <div
      className="relative flex flex-col w-[90%] p-12 space-y-4 justify-center rounded-lg bg-ndex-light-background-2
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
      <div className="space-y-2 ">
        <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm">
          EMAIL
        </div>
        <Input
          value={dummyEmail}
          onChange={setEmail}
          showLabel={false}
          placeholder={"Email"}
        />
      </div>
      <div className="space-y-4">
        <div className="text-ndex-text-grey  font-bold text-sm">
          PASSWORD
        </div>
        <button className="py-2 px-4 font-bold text-sm rounded-lg text-ndex-dark-text-default bg-ndex-button-bordered-red hover:opacity-80">
          Change Password
        </button>
      </div>

      <div className="space-y-4">
        <div className="text-ndex-text-grey  font-bold text-sm">
          DELETE ACCOUNT
        </div>
        <div className="text-sm font-semibold text-ndex-text-grey">
          Type "delete" to permanently delete your account
        </div>
        <Input
          value={deleteInput}
          onChange={setDeleteInput}
          showLabel={false}
          placeholder="type here"
        />
        <button
          className="py-2 px-4 font-bold text-sm rounded-lg text-ndex-dark-text-default bg-ndex-button-bordered-red hover:opacity-80 disabled:opacity-50"
          disabled={isDeleteDisabled()}
          onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditingCard;
