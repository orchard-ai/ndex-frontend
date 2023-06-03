import { useState } from "react";

type PropType = {
  email: string;
  setEditing: (value: boolean) => void;
};

const DefaultCard = ({ email, setEditing }: PropType) => {
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
          onClick={() => setEditing(true)}
        >
          edit profile
        </button>
      </div>
      <div className="space-y-2 ">
        <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey font-bold text-sm">
          EMAIL
        </div>
        <div className="text-ndex-light-text-primary dark:text-ndex-dark-text-default text-md pt-2">
          {email}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-ndex-light-text-secondary dark:text-ndex-text-grey text-sm font-bold">
          PASSWORD
        </div>
        <div className="text-ndex-light-text-primary dark:text-ndex-dark-text-default flex justify-between pt-2">
          <p> ••••••••••••••••• </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
